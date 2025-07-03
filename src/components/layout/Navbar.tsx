import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar p-7 border-b-1 border-gray-200 ">
      <div className="container">
        <div className=" flex justify-between align-center">
          <div className="logo">
            <h2 className="text-3xl font-cairo font-bold text-teal-600 uppercase">
              <Link href="/">eslam sobhey</Link>
            </h2>
          </div>
          <div className="links font-cairo hidden md:block">
            <ul className="flex items-center">
              <li>
                <Link
                  href="#"
                  className="px-3  rounded-sm cursor-pointer transition-all hover:text-teal-600 hover:bg-teal-50"
                >
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="px-3  rounded-sm cursor-pointer transition-all hover:text-teal-600 hover:bg-teal-50"
                >
                  من انا
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="px-3  rounded-sm cursor-pointer transition-all hover:text-teal-600 hover:bg-teal-50"
                >
                  دوراتي
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-3  rounded-sm cursor-pointer transition-all hover:text-teal-600 hover:bg-teal-50"
                >
                  خدماتي
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="px-3  rounded-sm cursor-pointer transition-all hover:text-teal-600 hover:bg-teal-50"
                >
                  اعمالي
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="px-3  rounded-sm cursor-pointer transition-all hover:text-teal-600 hover:bg-teal-50"
                >
                  تواصل معي
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
