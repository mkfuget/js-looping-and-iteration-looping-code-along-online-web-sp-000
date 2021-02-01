// Code your solutions in this file
function writeCards(array, event)
{
  out = []
  for(let i=0; i<array.length; i++)
  {
    out.push("Thank you, ${array[i]}, for the wonderful ${event} gift!")
  }
  return out
}
function countDown(num)
{
  for(let i = num, i>= 0, i--)
  {
    console.log(i)
  }
}
