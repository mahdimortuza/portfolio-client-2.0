import { Spin } from "antd"

 
const LoadingUI = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="example">
    <Spin size="large" />
  </div>
    </div>
  )
}

export default LoadingUI