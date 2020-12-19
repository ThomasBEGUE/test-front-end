import React, { useEffect } from 'react';
 
const Error = () => {
  
   useEffect(() => {
      document.title = 'Erreur';
   })

   return (
      <div>
         <p>Erreur: La page n'existe pas !</p>
      </div>
   );
}
 
export default Error;