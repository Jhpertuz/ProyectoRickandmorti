import Card from './Card';

export default function Cards({characters}) {
   const onClose=() => window.alert('Emulamos que se cierra la card')
   return (
   
   <div>   
      {characters.map(({name,species,gender,id,status,origin,image})=>{
         return (
            <Card
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
         />);
      })}
   </div>);
}
