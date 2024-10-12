import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Country List
      <br>
      </br>

      <Link href="/country/pakistan">Pakistan</Link> 
      <br>
      </br>
      <Link href="/country/india">India</Link>
    </div>
  );
}
