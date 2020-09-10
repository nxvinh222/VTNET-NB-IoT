import React from "react"; 
import { Modal } from "react-bootstrap"

function IntroVideo(props) {

    return (
       <div className="login-popup">
          <Modal show={props.show} onHide={props.handleClose} >
            {/* <Modal.Header closeButton> */}
            <div class="modal-dialog">
               <div class="modal-content"> 
                  <div class="modal-header text-center">
                  <h3 class="modal-title w-100 dark-grey-text font-weight-bold">Sign In</h3>
                  <button type="button" class="close" data-dismiss="modal" aria-lable="close">&times;</button>
                  </div>

                  <div class="modal-body mx-4">
                  <div class="md-form">
                        <input type="email" class="form-control validate" />
                        <label data-error="wrong" data-success="right">Your Email</label>
                  </div>

                  <div class="md-form">
                        <input type="password" class="form-control validate" />
                        <label data-error="wrong" data-success="right">Your Password</label>
                        <p class="font-small blue-text d-flex justify-content-end">Forgot<a href="#" class="blue-text ml-1">Password?</a></p>
                  </div>

                  <div class="text-center mb-3">
                        <button type="button" class="btn btn-primary btn-block z-depth-1a">Sign in</button>
                  </div>
                  <p class="font-small dark-grey-text d-flex justify-content-center">or sign in with:</p>

                  <div class="row my-3 justify-content-center">
                        <button type="button" class="btn btn-primary z-depth-1a"><i class="fab fa-facebook-f text-center"></i></button>
                        <button type="button" class="btn btn-purple z-depth-1a"><i class="fab fa-twitter text-center"></i></button>
                        <button type="button" class="btn btn-red z-depth-1a"><i class="fab fa-google-plus-g text-center"></i></button>
                  </div>
                  </div>
               </div>
            </div> 
         </Modal>
       </div>
      

   )
}

export default IntroVideo;