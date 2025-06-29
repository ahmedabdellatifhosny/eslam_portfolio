import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar p-7 ">
      <div className="container">
        <div className=" flex justify-between align-center">
          <div className="logo">
            <h1 className="text-3xl font-cairo font-bold text-teal-600">
              اسلام صبحي
            </h1>
          </div>
          <div className="links font-cairo font-medium">
            <Link
              href="#"
              className="px-3  rounded-sm cursor-pointer transition-all hover:text-teal-600 hover:bg-teal-50"
            >
              الصفحة الرئيسية
            </Link>
            <Link href="#" className="px-3  rounded-sm cursor-pointer transition-all hover:text-teal-600 hover:bg-teal-50">
              من انا{" "}
            </Link>
            <Link href="#" className="px-3  rounded-sm cursor-pointer transition-all hover:text-teal-600 hover:bg-teal-50">
              دوراتي
            </Link>
            <Link href="#" className="px-3  rounded-sm cursor-pointer transition-all hover:text-teal-600 hover:bg-teal-50">
              خدماتي
            </Link>
            <Link href="#" className="px-3  rounded-sm cursor-pointer transition-all hover:text-teal-600 hover:bg-teal-50">
              اعمالي
            </Link>
            <Link href="#" className="px-3  rounded-sm cursor-pointer transition-all hover:text-teal-600 hover:bg-teal-50">
              تواصل معي
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
