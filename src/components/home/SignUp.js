import Header from "../Header.js";

export default function SignUp() {
  return (
    <div>
      <Header />
      <div className="row mt-5">
        <div className="col-4"></div>
        <div className=" col-4 card text-center" style={styles.border}>
          <div className="card-header fw-bold fs-3 mb-5 mt-3" style={styles.title}>Sign up Page</div>
          <div className="card-body" >
            <input type="text" className="form-control form-control-lg" placeholder="Name" style={styles.border}/>
            <br />
            <input type="email" className="form-control form-control-lg" placeholder="Email" style={styles.border}/>
            <br />
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Password"
              style={styles.border}
            />
                        <div className="text-end pt-2">
                          Already Registered? 
            <a href="/sign-in" style={{textDecoration:"none"}}> Login</a>
            </div>
            <br />
            <input
              type="submit"
              className="btn btn-primary col-8"
              value="Sign up"
              style={styles.border} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}


const styles = {
  border:{
    border:"2px solid #000C33",
  },
  title:{
    border:"1px solid #000C33",
    color:"#000c33"

    
  }

}