import { calculateInvestmentResults } from "./util/Investment";
import { formatter } from "./util/Investment";
export default function Result( {input }){
     const resultsdata= calculateInvestmentResults(input)
     console.log(resultsdata)
    return(
      <table className="flex flex-col justify-center items-center gap-5 p-6 ">
          <thead className="w-3/5">
              <tr className="flex flex-row justify-between gap-5 w-full">
                  <th>Year</th>
                  <th>Investment value</th>
                  <th>Interest (yearly)</th>
                  <th>Total Interest</th>
                  <th>Invested capital</th>
              </tr>
          </thead>
          <tbody className="w-3/5 ">
              {resultsdata.map(yearData=>{
                  const totalint=yearData.valueEndOfYear-yearData.annualInvestment
                  return(
                      <tr key={yearData.year} className="flex flex-row justify-between w-full">
                          <td className=" left-4 w-16 ">{yearData.year}</td>
                          <td className=" text-endw-24 text-end">{ formatter.format(yearData.valueEndOfYear)}</td>
                          <td className=" text-end w-24">{ formatter.format (yearData.annualInvestment)}</td>
                          <td className=" text-end w-24">{ formatter.format(yearData.interest)}</td>
                          <td className=" text-end w-24">{  formatter.format(totalint)}</td>
                      </tr>
                  )
              })}
          </tbody>
      </table>
    )
}