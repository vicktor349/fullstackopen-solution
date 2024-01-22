import React, { useState } from "react"


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)



const Statistic = ({ text, value }) =>
{
  return (
    <tr>
      <td>{text}: </td>
      <td>{value}</td>
    </tr>
  )
}


const Statistics = ({ good, neutral, bad, total, average, positive }) =>
{
  if (total === 0)
  {
    return (
      <p>No feedback given</p>
    )
  } else
  {
    return (
      <div>
        <h1><b>Statistics</b></h1>
        <table>
          <tbody>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={bad} />
            <Statistic text="All" value={total} />
            <Statistic text="Average" value={average} />
            <Statistic text="Positive" value={positive} />
          </tbody>
        </table>
      </div>
    )
  }
}


const App = () =>
{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = total / 3
  const positive = good * (100 / total)

  return (
    <div>
      <h1><b>GIVE FEEDBACK</b></h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button text='Neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='Bad' handleClick={() => setBad(bad + 1)} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive + "%"}
      />
    </div>
  )
}

export default App