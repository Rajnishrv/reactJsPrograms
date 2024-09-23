import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card name="Rani" follow="50k" />
      <Card name="Priyanka" follow="500k" />
      <Card name="Puja" follow="80k" />
      <Card name="Avantika" follow="70k" />
      <Card name="Rajni" follow="30k" />
      <Card name="Rakhi" />
    </>
  )
}

export default App
