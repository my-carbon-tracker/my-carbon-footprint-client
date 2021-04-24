import React from "react";

const Footer = () => (

    <footer style={{ padding: '45px 0 20px', fontSize: '15px', lineHeight: '24px' }}>
    <div style={{textAlign: "center"}}>
        <div>
          <p class="copyright-text">Copyright &copy; My Carbon Footprint 2021</p>
        </div>
        <div>
          <ul style={{ paddingLeft:'0', marginBottom:'0', listStyle:'none'}}>
            <li><a href="https://github.com/my-carbon-tracker"><i><img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-128.png" width="2%" height="2%"/></i></a></li>   
          </ul>
        </div>
    </div>
    </footer>
);

export default Footer;