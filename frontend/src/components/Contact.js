import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <>
      <div className="w3-col m6 s12 w3-container contt">
        <div className="w3-col m6 s12 contact">
          <h3>Liên hệ Lanhnb.store</h3>
          <form className="frmcontact" action="/contact/" method="post">
            <div className="form-group">
              <label for="name">Tên</label>
              <input type="text" className="form-control" id="name" name='name' placeholder="Nhập tên" />
            </div>
            <div className="form-group">
              <label for="name">Email</label>
              <input type="email" className="form-control" id="email" name='email' placeholder="Nhập Email" />
            </div>

            <div className="form-group">
              <label for="name">Điện thoại</label>
              <input type="tel" className="form-control" id="phone" name='phone' placeholder="Nhập số điện thoại" />
            </div>


            <div className="form-group">
              <label for="desc">Nhập thông tin yêu cầu Lanhnb.store</label>
              <textarea className="form-control" id="desc" name='desc' rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-success" id="sb1" >Submit</button>
          </form>



        </div>
        <div className="w3-col m6 s12">
          <div w3-text-center> Google Map here </div>
        </div>
        </div>
      </>
    </Wrapper>
  )
}

export default Contact;





const Wrapper = styled.section`
@media only screen and (max-device-width: 480px) {
  .contt{
      display:grid;
  }
display:flex;
.contact{
  margin-left:20px;
}


  button#sb1 {
    padding: 5px 20px;
    font-size: 18px;
    margin-top: 20px;
}
    
  `;




