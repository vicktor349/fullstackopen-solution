const Header = (props) =>
{
  return (
    <p>{props.course}</p>
  )
}

const Part1 = (props) =>
{
  return (
    <p>{props.name1}: {props.exercises1}</p>
  )
}
const Part2 = (props) =>
{
  return (
    <p>{props.name2}: {props.exercises2}</p>
  )
}
const Part3 = (props) =>
{
  return (
    <p>{props.name3}: {props.exercises3}</p>
  )
}


const Content = (props) =>
{
  return (
    <div>
      <Part1 name1={props.name1} exercises1={props.exercises1} />
      <Part2 name2={props.name2} exercises2={props.exercises2} />
      <Part3 name3={props.name3} exercises3={props.exercises3} />
    </div>
  )
}

const Total = (props) =>
{
  return (
    <div>
      <p>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () =>
{
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content
        name1={course.parts[0].name} exercises1={course.parts[0].exercises}
        name2={course.parts[1].name} exercises2={course.parts[1].exercises}
        name3={course.parts[2].name} exercises3={course.parts[2].exercises}
      />
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[0].exercises} exercises3={course.parts[0].exercises} />
    </div>
  )
}

export default App;