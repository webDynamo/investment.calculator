import { useState } from "react"

export default function UserInput({onChange,  userInput}){




    return(
        <section className="flex flex-col justify-center items-center md:flex-row">
              <div className="w-96">
                  <p className="flex flex-col p-6">
                      <label className="font-extrabold">Initial Investment:-</label>
                      <input className="border-2 border-black
                      rounded-sm" type="number" required
                      value={userInput.initialInvestment}
                      onChange={(event)=>onChange("initialInvestment",event.target.value)}/>
                  </p>
                  <p className="flex flex-col p-6">
                      <label className="font-extrabold">Annual Investment:-</label>
                      <input className="border-2 border-black
                      rounded-sm" type="number" required
                      value={userInput.annualInvestment}
                      onChange={(event)=>onChange("annualInvestment",event.target.value)}/>
                  </p>
                
              </div>

              <div className="w-96">
                  <p className="flex flex-col p-6">
                      <label className="font-extrabold">Expected Investment:-</label>
                      <input className="border-2 border-black
                      rounded-sm" type="number" required
                      value={userInput.expectedReturn}
                      onChange={(event)=>onChange("expectedReturn",event.target.value)}/>
                  </p>
                  <p className="flex flex-col p-6">
                      <label className="font-extrabold">Duration:-</label>
                      <input className="border-2 border-black
                      rounded-sm" type="number" required
                      value={userInput.duration}
                      onChange={(event)=>onChange("duration",event.target.value)}/>
                  </p>
                
              </div>

              

        </section>

        
    )
}