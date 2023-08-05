import React, { useState } from "react";

const Main = () => {
  const [policyName, setPolicyName] = useState("");
  const [policyTerm, setPolicyTerm] = useState("");
  const [monthlyPremium, setMonthlyPremium] = useState("");
  const [quarterlyPremium, setQuarterlyPremium] = useState("");
  const [halfYearlyPremium, setHalfYearlyPremium] = useState("");
  const [yearlyPremium, setYearlyPremium] = useState("");
  const [firstYearIncentive, setFirstYearIncentive] = useState(0);
  const [secondYearIncentive, setSecondYearIncentive] = useState(0);

  const calculate = () => {
    if (policyName === "PLI" && policyTerm === "upto15") {
      const yearlyPremiumValue = parseFloat(yearlyPremium);
      const firstYearIncentiveAmount = yearlyPremiumValue * 0.04;
      const secondYearIncentiveAmount = yearlyPremiumValue * 0.01;

      setFirstYearIncentive(firstYearIncentiveAmount.toFixed(2));
      setSecondYearIncentive(secondYearIncentiveAmount.toFixed(2));
    } else if (policyName === "PLI" && policyTerm === "15to25") {
      const yearlyPremiumValue = parseFloat(yearlyPremium);
      const firstYearIncentiveAmount = yearlyPremiumValue * 0.10;
      const secondYearIncentiveAmount = yearlyPremiumValue * 0.01;

      setFirstYearIncentive(firstYearIncentiveAmount.toFixed(2));
      setSecondYearIncentive(secondYearIncentiveAmount.toFixed(2));
    } else if (policyName === "PLI" && policyTerm === "25plus") {
      const yearlyPremiumValue = parseFloat(yearlyPremium);
      const firstYearIncentiveAmount = yearlyPremiumValue * 0.20;
      const secondYearIncentiveAmount = yearlyPremiumValue * 0.01;

      setFirstYearIncentive(firstYearIncentiveAmount.toFixed(2));
      setSecondYearIncentive(secondYearIncentiveAmount.toFixed(2));
    } else {
      console.log("Something went wrong")
    }

    if (policyName === "RPLI" ){
      const yearlyPremiumValue = parseFloat(yearlyPremium);
      const firstYearIncentiveAmount = yearlyPremiumValue * 0.10;
      const secondYearIncentiveAmount = yearlyPremiumValue * 0.025;

      setFirstYearIncentive(firstYearIncentiveAmount.toFixed(2));
      setSecondYearIncentive(secondYearIncentiveAmount.toFixed(2));
    }
    else{
      console.log("Something Went Wrong");
    }
  };


  const calculateOtherPremiums = (premiumValue, premiumType) => {
    if (premiumType === "monthly") {
      setQuarterlyPremium((parseFloat(premiumValue) * 3).toFixed(2));
      setHalfYearlyPremium((parseFloat(premiumValue) * 6).toFixed(2));
      setYearlyPremium((parseFloat(premiumValue) * 12).toFixed(2));
    } else if (premiumType === "quarterly") {
      setMonthlyPremium((parseFloat(premiumValue) / 3).toFixed(2));
      setHalfYearlyPremium((parseFloat(premiumValue) * 2).toFixed(2));
      setYearlyPremium((parseFloat(premiumValue) * 4).toFixed(2));
    } else if (premiumType === "halfYearly") {
      setMonthlyPremium((parseFloat(premiumValue) / 6).toFixed(2));
      setQuarterlyPremium((parseFloat(premiumValue) / 2).toFixed(2));
      setYearlyPremium((parseFloat(premiumValue) * 2).toFixed(2));
    } else if (premiumType === "yearly") {
      setMonthlyPremium((parseFloat(premiumValue) / 12).toFixed(2));
      setQuarterlyPremium((parseFloat(premiumValue) / 4).toFixed(2));
      setHalfYearlyPremium((parseFloat(premiumValue) / 2).toFixed(2));
    }
  };

  return (
    <section className="m-4 p-4">
      <p className="text-xl font-semibold">
        Welcome to the PLI Incentive Calculator page!
      </p>
      <p className="text-md text-gray-600 mt-2">
        This is a simple calculator that will help you calculate your incentive.
      </p>
      <div className="flex flex-col justify-between">
      <form className="mt-6">
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="policyName"
          >
            Policy Name
          </label>
          <select
            className="appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="policyName"
            value={policyName}
            onChange={(e) => setPolicyName(e.target.value)}
          >
            <option value="">Select Policy Name</option>
            <option value="PLI">PLI</option>
            <option value="RPLI">RPLI</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="policyTerm"
          >
            Policy Term
          </label>
          <select
            className="appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="policyTerm"
            value={policyTerm}
            onChange={(e) => setPolicyTerm(e.target.value)}
          >
            <option value="">Select Policy Term</option>
            <option value="upto15">Up to 15 years</option>
            <option value="15to25">More than 15 and less than 25 years</option>
            <option value="25plus">More than 25 years</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="policyPremium"
          >
            Policy Premium
          </label>
          <div className="flex space-x-2">
            <input
              className="appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="monthlyPremium"
              type="number"
              placeholder="Monthly Premium"
              value={monthlyPremium}
              onChange={(e) => {
                setMonthlyPremium(e.target.value);
                calculateOtherPremiums(e.target.value, "monthly");
              }}
            />
            <input
              className="appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quarterlyPremium"
              type="number"
              placeholder="Quarterly Premium"
              value={quarterlyPremium}
              onChange={(e) => {
                setQuarterlyPremium(e.target.value);
                calculateOtherPremiums(e.target.value, "quarterly");
              }}
            />
          </div>
          <div className="flex space-x-2 mt-2">
            <input
              className="appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="halfYearlyPremium"
              type="number"
              placeholder="Half-Yearly Premium"
              value={halfYearlyPremium}
              onChange={(e) => {
                setQuarterlyPremium(e.target.value);
                calculateOtherPremiums(e.target.value, "halfyearly");
              }}
            />
            <input
              className="appearance-none border rounded w-50  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="yearlyPremium"
              type="number"
              placeholder="Yearly Premium"
              value={yearlyPremium}
              onChange={(e) => {
                setYearlyPremium(e.target.value);
                calculateOtherPremiums(e.target.value, "yearly");
              }}
            />
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={calculate}
        >
          Calculate
        </button>
      </form>
      <div className="mt-4">
        <p className="font-semibold">Incentive Amount:</p>
        <p>1st Year Incentive: {firstYearIncentive}</p>
        <p>After 1st Year Incentive: {secondYearIncentive}</p>
      </div>
      </div>
    </section>
  );
};

export default Main;
