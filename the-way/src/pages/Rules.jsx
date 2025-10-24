import React from "react";
import RulesBanner from "../components/RulesBanner";
import RulesBegin from "../components/RulesBegin";
import RulesSumary from "../components/RulesSumary";
import RulesCard from "../components/RulesCard";

export default function Rules() {
  return (
    <div>
      <RulesBanner />
      <RulesBegin />
      <RulesSumary />
      <RulesCard />
     
    </div>
  );
}
