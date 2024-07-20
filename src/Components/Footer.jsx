import React from 'react'

function Footer() {
  return <>
  <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; E-Cart {new Date().getFullYear()}
          </p>
        </div>
      </footer>
  </>
}

export default Footer