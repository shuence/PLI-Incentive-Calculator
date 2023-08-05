import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [policyName, setPolicyName] = useState("");
  const [policyTerm, setPolicyTerm] = useState("");
  const [monthlyPremium, setMonthlyPremium] = useState("");
  const [quarterlyPremium, setQuarterlyPremium] = useState("");
  const [halfYearlyPremium, setHalfYearlyPremium] = useState("");
  const [yearlyPremium, setYearlyPremium] = useState("");
  const [firstYearIncentive, setFirstYearIncentive] = useState(0);
  const [secondYearIncentive, setSecondYearIncentive] = useState(0);
  const [totalIncentive, setTotalIncentive] = useState(0);
  const [ageAtEntry, setAgeAtEntry] = useState("");
  const [maturityAge, setMaturityAge] = useState("");
  const [sumAssured, setSumAssured] = useState("");
  const [policyTermCategory, setPolicyTermCategory] = useState("");

  const calculate = () => {
    const policyTermValue = maturityAge - ageAtEntry;
    setPolicyTerm(policyTermValue);

    let policyTermCategoryValue = "";

    if (policyTermValue <= 15) {
      policyTermCategoryValue = "upto15";
    } else if (policyTermValue > 15 && policyTermValue < 25) {
      policyTermCategoryValue = "15to25";
    } else if (policyTermValue >= 25) {
      policyTermCategoryValue = "25plus";
    }

    setPolicyTermCategory(policyTermCategoryValue);

    if (policyName === "PLI") {
      const yearlyPremiumValue = parseFloat(yearlyPremium);
      let firstYearIncentiveAmount = 0;
      let secondYearIncentiveAmount = 0;
      let totalIncentiveAmount = 0;

      if (policyTermCategoryValue === "upto15") {
        firstYearIncentiveAmount = yearlyPremiumValue * 0.04;
        secondYearIncentiveAmount = yearlyPremiumValue * 0.01;
      } else if (policyTermCategoryValue === "15to25") {
        firstYearIncentiveAmount = yearlyPremiumValue * 0.1;
        secondYearIncentiveAmount = yearlyPremiumValue * 0.01;
      } else if (policyTermCategoryValue === "25plus") {
        firstYearIncentiveAmount = yearlyPremiumValue * 0.2;
        secondYearIncentiveAmount = yearlyPremiumValue * 0.01;
      }
      setFirstYearIncentive(firstYearIncentiveAmount.toFixed(2));
      setSecondYearIncentive(secondYearIncentiveAmount.toFixed(2));

      const remainingPolicyYears = policyTermValue - 1;
      const totalSecondYearIncentive =
        parseFloat(secondYearIncentiveAmount) * remainingPolicyYears;
      totalIncentiveAmount =
        parseFloat(firstYearIncentiveAmount) + totalSecondYearIncentive;
      setTotalIncentive(totalIncentiveAmount.toFixed(2));
    } else if (policyName === "RPLI") {
      const yearlyPremiumValue = parseFloat(yearlyPremium);
      let firstYearIncentiveAmount = 0;
      let secondYearIncentiveAmount = 0;
      let totalIncentiveAmount = 0;

      if (policyTermCategoryValue === "upto15") {
        firstYearIncentiveAmount = yearlyPremiumValue * 0.1;
        secondYearIncentiveAmount = yearlyPremiumValue * 0.025;
      } else if (policyTermCategoryValue === "15to25") {
        firstYearIncentiveAmount = yearlyPremiumValue * 0.1;
        secondYearIncentiveAmount = yearlyPremiumValue * 0.025;
      } else if (policyTermCategoryValue === "25plus") {
        firstYearIncentiveAmount = yearlyPremiumValue * 0.1;
        secondYearIncentiveAmount = yearlyPremiumValue * 0.025;
      }

      setFirstYearIncentive(firstYearIncentiveAmount.toFixed(2));
      setSecondYearIncentive(secondYearIncentiveAmount.toFixed(2));

      const remainingPolicyYears = policyTermValue - 1;
      const totalSecondYearIncentive =
        parseFloat(secondYearIncentiveAmount) * remainingPolicyYears;
      totalIncentiveAmount =
        parseFloat(firstYearIncentiveAmount) + totalSecondYearIncentive;
      setTotalIncentive(totalIncentiveAmount.toFixed(2));
    } else {
      toast.error("Select Policy");
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

  const isFormValid = () => {
    return (
      policyName !== "" &&
      ageAtEntry !== "" &&
      maturityAge !== "" &&
      monthlyPremium !== "" &&
      quarterlyPremium !== "" &&
      halfYearlyPremium !== "" &&
      yearlyPremium !== "" &&
      sumAssured !== ""
    );
  };

  const handleCalculate = () => {
    if (isFormValid()) {
      calculate();
    } else {
      toast.error("Please fill out all required fields.");
    }
  };

  return (
    <section className="m-10 p-4 flex flex-col md:flex-row">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="md:w-1/2">
        <p className="text-xl font-semibold">
          Welcome to the PLI Incentive Calculator page!
        </p>
        <p className="text-md text-gray-600 mt-2">
          This is a simple calculator that will help you calculate your
          incentive.
        </p>
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
              htmlFor="age"
            >
              Age
            </label>
            <div className="flex flex-col md:flex-row md:space-x-2">
              <input
                className="appearance-none border rounded w-80 md:w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ageEntry"
                type="number"
                required
                placeholder="Age At Entry"
                value={ageAtEntry}
                onChange={(e) => {
                  setAgeAtEntry(e.target.value);
                }}
              />
              <input
                className="appearance-none border rounded w-80 md:w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 md:mt-0"
                id="maturityAge"
                type="number"
                placeholder="Maturity Age"
                required
                value={maturityAge}
                onChange={(e) => {
                  const newMaturityAge = e.target.value;
                  if (newMaturityAge <= 100) {
                    setMaturityAge(newMaturityAge);
                  }
                }}
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="policyPremium"
            >
              Policy Premium
            </label>
            <div className="flex flex-col md:flex-row md:space-x-2">
              <input
                className="appearance-none border rounded w-80 md:w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="monthlyPremium"
                type="number"
                placeholder="Monthly Premium"
                required
                value={monthlyPremium}
                onChange={(e) => {
                  setMonthlyPremium(e.target.value);
                  calculateOtherPremiums(e.target.value, "monthly");
                }}
              />
              <input
                className="appearance-none border rounded w-80 md:w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 md:mt-0"
                id="quarterlyPremium"
                type="number"
                required
                placeholder="Quarterly Premium"
                value={quarterlyPremium}
                onChange={(e) => {
                  setQuarterlyPremium(e.target.value);
                  calculateOtherPremiums(e.target.value, "quarterly");
                }}
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-2 mt-2">
              <input
                className="appearance-none border rounded w-80 md:w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="halfYearlyPremium"
                type="number"
                required
                placeholder="Half-Yearly Premium"
                value={halfYearlyPremium}
                onChange={(e) => {
                  setHalfYearlyPremium(e.target.value);
                  calculateOtherPremiums(e.target.value, "halfyearly");
                }}
              />
              <input
                className="appearance-none border rounded w-80 md:w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 md:mt-0"
                id="yearlyPremium"
                type="number"
                required
                placeholder="Yearly Premium"
                value={yearlyPremium}
                onChange={(e) => {
                  setYearlyPremium(e.target.value);
                  calculateOtherPremiums(e.target.value, "yearly");
                }}
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="policyPremium"
            >
              Sum Assured
            </label>
            <input
              className="appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sumAssured"
              type="number"
              placeholder="Sum Assured"
              required
              value={sumAssured}
              onChange={(e) => {
                setSumAssured(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleCalculate}
          >
            Calculate
          </button>
        </form>
      </div>
      <div className="md:w-1/2  sm:w-80 md:pl-4 md:mt-8 sm:mt-8 mt-8">
        <p className="text-xl font-semibold">
          Postal Life Insurance - Incentive:
        </p>
        <p className="pt-2">Policy: {policyName}</p>
        <p className="pt-2">Policy Term Category: {policyTermCategory}</p>
        <p className="pt-2">Policy Age: {policyTerm}</p>
        <p className="pt-2">Age at Entry: {ageAtEntry}</p>
        <p className="pt-2">Maturity Age: {maturityAge}</p>
        <p className="pt-2">Sum Assured: {sumAssured}</p>
        <p className="mt-4 text-xl font-semibold">Incentive Amount:</p>
        <p className="pt-2">1st Year Incentive: {firstYearIncentive}</p>
        <p className="pt-2">After 1st Year Incentive: {secondYearIncentive}</p>
        <p className="pt-2">
          Total Incentive of {policyTerm} Year: {totalIncentive}
        </p>
      </div>
    </section>
  );
};

export default Main;
