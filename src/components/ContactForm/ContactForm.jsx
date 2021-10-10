import React, { useState } from 'react';
import s from './ContactForm.module.css'
  
function Form (props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')
    
    
 const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
      return
    }
    if (name === 'number') {
      setNumber(value)
    }   
  };
    
  const handleSubmit = e => {
    e.preventDefault();
    
    props.formSubmitHandler({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('')
  };
    
    return (
             <form onSubmit={handleSubmit} className={s.form}>
          Name
          
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
          />
         
          Number
         
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
          />
          
          <button type="submit" className={s.btnForm}>Add contact</button>
        </form>
        )
}

export default Form;

// class Form extends Component {
//     state = {
//      name: '',
//     number: '',
//     }
    
//  handleChange = event => {
//     const { name, value } = event.currentTarget;
//     // console.log(event.currentTarget);
//     // используем вычисляемые св-ва
//     this.setState({
//       [name]: value,
//     });
//     };
    
//       handleSubmit = e => {
//     e.preventDefault();
//     // const { name, number } = this.state;
//     // console.log(`
//     //   name: ${name}
//     //   number: ${number}
//     // `);
//     this.props.formSubmitHandler({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
    
//     render() {
//         return (
//              <form onSubmit={this.handleSubmit} className={s.form}>
//           Name
          
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
         
//           Number
         
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//             value={this.state.number}
//             onChange={this.handleChange}
//           />
          
//           <button type="submit" className={s.btnForm}>Add contact</button>
//         </form>
//         )
//     }
// }