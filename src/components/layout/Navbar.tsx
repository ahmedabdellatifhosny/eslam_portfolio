import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar p-7 ">
      <div className="container">
        <div className=" flex justify-between align-center">
          <div className="logo">
            <h1 className="text-3xl font-cairo font-bold text-teal-600">اسلام صبحي</h1>
          </div>
          <div className="links font-cairo font-medium" >
            <Link href="#" className="px-3">الصفحة الرئيسية</Link>
            <Link href="#" className="px-3">من انا </Link>
            <Link href="#" className="px-3">دوراتي</Link>
            <Link href="#" className="px-3">خدماتي</Link>
            <Link href="#" className="px-3">اعمالي</Link>
            <Link href="#" className="px-3">تواصل معي</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
