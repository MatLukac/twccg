import React from "react";
import RulesBanner from "../components/RulesBanner";
import RulesBegin from "../components/RulesBegin";
import RulesSumary from "../components/RulesSumary";

export default function Rules() {
  return (
    <div>
      <RulesBanner />
      <RulesBegin />
      <RulesSumary />
      <h1>Pravidlá</h1>
      <p>Toto sú pravidlá našej komunity...</p>
    </div>
  );
}
