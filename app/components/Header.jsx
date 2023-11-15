import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from "react"

function Header() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/movies/search?query=${searchText}`);
    }
  }
  return (
    <div><nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src="/logo MV.png" alt="Logo" width="50" height="50" /> MOVIE VERSE
        </Link>
        <form className="d-flex" onChange={e => handleSubmit(e)} role="search">
          <input onChange={e => setSearchText(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav></div>
  )
}

export default Header