import { trpc } from "@/trpc/server";
const Homepage = async () => {
  const data = await trpc.hello({text : "Firoz"})
  return (
    <div >
     Client Component Says : {data.greeting}
    </div>
  )
}

export default Homepage