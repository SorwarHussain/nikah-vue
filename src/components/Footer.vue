<template>
   <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>quick links</h4>
  	 			<ul>
                    <li>
                        <a href="https://www.facebook.com/SylhetiNikah" target="_blank"
                        >our facebook page</a
                        >
                    </li>
                    <li>
                        <a href="https://www.facebook.com/groups/356021849930939" target="_blank"
                        >Our Facebook Group
                        </a>
                    </li>
  	 				<li><a href="">about us</a></li>
  	 				<li><a href="">our services</a></li>  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
					<li><router-link class="nav-item nav-link active" to="/">হোম</router-link></li>
                    <li><a href="">আমাদের সম্পর্কে</a></li>
                    <li><a href="">প্রশ্ন ও উত্তর</a></li>
                    <li><a href="https://www.youtube.com/channel/UChrI5ZX39en09zPeQVIhj0Q" target="_blank">ভিডিও টিউটোরিয়াল</a></li>
                    <li><a href="">যোগাযোগ</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>contact info</h4>
  	 			<ul> 	 				
  	 				<li><a href=""><i class="fas fa-phone"></i>&nbsp; +01789-612005</a></li>
                    <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcRPPtNjpRHMZgprBtpnZsMfSZqCJSgZBsPlGTRgQwVwlHxflxgwvNpZJxHNBjWkvxPSV" target="_blank"><i class="fas fa-envelope"></i>&nbsp;&nbsp; SylhetiNikah@gmail.com</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
                    <a href="https://www.facebook.com/SylhetiNikah" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://t.me/sylhetinikah" target="_blank"><i class="fab fa-telegram-plane"></i></a>
                    <a href="https://www.youtube.com/channel/UChrI5ZX39en09zPeQVIhj0Q/featured" target="_blank"><i class="fab fa-youtube"></i></a> 
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  <div class="bottom">
      <span class="credit"
        ><a href="https://www.sylhetinikah.com">SylhetiNikah.com</a> |
      </span>
      <span class="far fa-copyright" ></span
      ><span> 2023 All rights reserved.</span>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
	margin:0;
	padding:0;
	box-sizing: border-box;
}
.container{
	max-width: 1170px;
	margin:auto;
}
.row{
	display: flex;
	flex-wrap: wrap;
}
ul{
	list-style: none;
}
.footer{
	background-color: #24262b;
    padding: 70px 0;
}
.footer-col{
   width: 25%;
   padding: 0 15px;
}
.footer-col h4{
	font-size: 18px;
	color: #ffffff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #e91e63;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 300;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #ffffff;
	padding-left: 8px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: #24262b;
	background-color: #ffffff;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}


/*bottom copyright*/ 
/*bottom*/
.bottom {
  text-align: center;
  padding: 5px;
  font-size: 0.9375rem;
  background: #151515;
  padding:20px 0 50px;
}
.bottom span,.bottom {
  color: #656565;
}
.bottom a {
  color: #1d6b87;
  text-decoration: none;
}
.bottom a:hover {
  text-decoration: underline;
}

  </style>