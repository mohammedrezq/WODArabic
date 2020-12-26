import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const FourOhFour = () => {
  return (
   <Layout>
     الصفحة غير موجودة يمكنك العودة إلى <Link to="/">الصفحة الرئيسية</Link> او <Link to="/blog">المدونة</Link> للإطلاع على احدث المواضيع.
   </Layout>
  )
}

export default FourOhFour
