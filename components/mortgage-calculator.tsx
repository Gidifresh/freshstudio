"use client"

import { useState, useMemo } from "react"
import { Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/data"

export function MortgageCalculator({ defaultPrice }: { defaultPrice: number }) {
  const [homePrice, setHomePrice] = useState(defaultPrice)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [interestRate, setInterestRate] = useState(18)
  const [loanTerm, setLoanTerm] = useState(20)

  const result = useMemo(() => {
    const downPayment = homePrice * (downPaymentPercent / 100)
    const loanAmount = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm * 12

    if (monthlyRate === 0) {
      return {
        monthlyPayment: loanAmount / numPayments,
        totalPayment: loanAmount,
        totalInterest: 0,
        downPayment,
        loanAmount,
      }
    }

    const monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)

    const totalPayment = monthlyPayment * numPayments
    const totalInterest = totalPayment - loanAmount

    return { monthlyPayment, totalPayment, totalInterest, downPayment, loanAmount }
  }, [homePrice, downPaymentPercent, interestRate, loanTerm])

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10">
          <Calculator className="h-5 w-5 text-gold" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-foreground">Mortgage Calculator</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Home Price</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Down Payment (%)</label>
          <input
            type="number"
            value={downPaymentPercent}
            min={0}
            max={100}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            step={0.1}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Loan Term (years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl bg-navy p-6 md:grid-cols-4">
        {[
          { label: "Monthly Payment", value: formatPrice(Math.round(result.monthlyPayment)) },
          { label: "Down Payment", value: formatPrice(Math.round(result.downPayment)) },
          { label: "Loan Amount", value: formatPrice(Math.round(result.loanAmount)) },
          { label: "Total Interest", value: formatPrice(Math.round(result.totalInterest)) },
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <p className="text-xs text-primary-foreground/60">{label}</p>
            <p className="mt-1 font-serif text-lg font-bold text-gold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
