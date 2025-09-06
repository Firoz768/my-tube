interface layoutProps{
    children: React.ReactNode
};

const layout = ({children}:layoutProps) => {
  return (
    <div className=" min-h-screen flex items-center justify-center" >
        {children}
    </div>
  )
}

export default layout