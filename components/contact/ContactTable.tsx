import Link from "next/link";
export default function ContactTable() {
  return (
    <pre className="py-5 font-mono text-3xl">
      +----------------+-----------------------------------+<br />
      |                       Contact                      |<br />
      +----------------+-----------------------------------+<br />
      | Media          | Address                           |<br />
      +----------------+-----------------------------------+<br />
      | Email          | <EmailLink />               |<br />
      | Zenn           | <ZennLink />                   |<br />
      | Instagram      | <InstagramLink />            |<br />
      | GitHub         | <GithubLink />              |<br />
      +----------------+-----------------------------------+<br />
    </pre>
  );
}

function EmailLink() {
  return (
    <Link href="kuroha.j@outlook.jp" className="text-blue-500 underline">
      kuroha.j@outlook.jp
    </Link>
  );
}

function ZennLink() {
  return (
    <Link href="https://zenn.dev/bitcat" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
      zenn.dev/bitcat
    </Link>
  );
}

function InstagramLink() {
  return (
    <Link href="https://instagram.com/bitcat32" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
      instagram.com/bitcat32
    </Link>
  );
}

function GithubLink() {
  return (
    <Link href="https://github.com/joesandao" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
      github.com/joesandao
    </Link>
  );
}
