import { useContext, useRef, useState } from 'react';
import './SettingsPage.css';
import { Context } from '../../../context';

export const Settings = () => {

  const [imgFile, setImgFile] = useState(null);
  const { formData, setFormData, setContactData } = useContext(Context)
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const addressRef = useRef()
  const imgRef = useRef()

  const seeImg = () => {
    const ImgData = URL.createObjectURL(imgRef.current.files[0]);
    setImgFile(ImgData);
  }

  const AddAboutClick = (e) => {
    e.preventDefault();
    const data = [{
      id: new Date().getTime(),
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      img: imgFile
    }]
    setFormData(data);
  };

  const AddContactClick = (e) => {
    e.preventDefault();
    const data = [{
      id: new Date().getTime(),
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      img: imgFile,
    }]
    setContactData(data);
  };

  return (
    <div className='container formItems'>
      <form className='formContainer'>
        <div>
          <label >Name</label>
          <input
            placeholder='Enter your name'
            type='text'
            name='name'
            value={formData.name}
            ref={nameRef}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            placeholder='Email'
            type='text'
            name='email'
            value={formData.email}
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone</label>
          <input
            placeholder='Phone Number'
            type='text'
            name='phone'
            value={formData.phone}
            ref={phoneRef}
          />
        </div>
        <div>
          <label htmlFor='address'>Address</label>
          <input
            placeholder='Address'
            type='text'
            name='address'
            value={formData.address}
            ref={addressRef}
          />
        </div>
        <div>
          <label htmlFor='address'>Address</label>
          <input
            type='file'
            name='img'
            ref={imgRef}
            onChange={seeImg}
          />
        </div>
        <button onClick={AddAboutClick} className='formBtn' type='button'>add for about</button>
        <button onClick={AddContactClick} className='formBtn' type='button'>add for contacts</button>
      </form>
    </div>
  );
};

export default Settings;
