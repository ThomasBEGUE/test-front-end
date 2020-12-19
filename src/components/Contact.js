import React, { useEffect } from 'react';
 
const Contact = () => {

    useEffect(() => {
        document.title = 'Contact';
    });

    return (
       <div>
          <h1>Contact</h1>
           <p>
            Nullam euismod risus in ligula dictum efficitur. Donec ornare mi ac diam rhoncus efficitur. 
            Donec sagittis est eget mauris tristique porttitor. Cras ultrices tristique lorem, at aliquet nisi ullamcorper ut.
            Aliquam eu urna vitae ligula fringilla elementum. Nullam feugiat vestibulum sem ac vehicula. Proin tincidunt tellus vel iaculis aliquet.
            Aenean turpis lectus, vestibulum in tellus eu, condimentum lobortis leo. Integer bibendum eros non ultricies tempor.
            Fusce porta nunc sit amet gravida convallis. Vestibulum mattis tellus in scelerisque molestie. Mauris eros purus, feugiat sed libero sed, rhoncus ornare sem. 
            Quisque quis euismod metus, luctus elementum est. Vestibulum molestie augue ac mauris sollicitudin, quis ultricies eros aliquam. 
            Donec accumsan felis ac velit scelerisque aliquam. Sed molestie magna a quam cursus, at porta ante vestibulum.  
           </p>
       </div>
    );
}
 
export default Contact;