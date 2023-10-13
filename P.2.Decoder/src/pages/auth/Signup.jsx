import { useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import {  useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate();
    // const [profilePhoto, setProfilePhoto] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setaddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [selectedOccupation, setSelectedOccupation] = useState('Developer');
    const Interests = ['Game Development', 'App Development', 'Web Development', 'UI/UX desin', 'API creation', 'AI and ML', 'Data Analystics'];
    const includedFeatures = [
        "Innovative Drag and Drop Interface",
        "Cutting-edge AI Integration",
        "Real-time Code Generation",
        "Seamless Integration and Deployment",
        "Thriving Collaborative Community",
        "AI-Enhanced Learning Environment"
    ];
    // const handlePhotoChange = (event) => {
    //     const file = event.target.files[0];
    //     setProfilePhoto(file);
    // };

    const handleInterestChange = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter((item) => item !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    const handleOccupationChange = (event) => {
        setSelectedOccupation(event.target.value);
    };

    const handleSubmit = async () => {
        const DataToSend = {
            firstName,
            lastName,
            email,
            password,
            location: address + ", " + country + ", " + pincode,
            interests: selectedInterests,
            occupation: selectedOccupation,
            paymentDetail: {
                package: 'learner',
                payterm: 'free',
            }
        };
        try {
            const response = await fetch('http://127.0.0.1:3000/auth/signup', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(DataToSend),
            });

            if (response.ok) {
                navigate('/Login');
                console.log('Request sent successfully', response.json);
            } else {
                console.log("error in sending the request");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="bg-slate-100 w-screen h-screen overflow-y-scroll">
            <div className="flex flex-col justify-start items-center xs:mx-auto xs:w-full xs:max-w-xl">
                {/* header Block */}
                <section className="mt-6">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="src/assets/logo.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Join <span className='text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-green-400'>Decoder</span>
                    </h2>
                    <h5 className="mt-2 text-center text-base font-bold leading-9 tracking-tight text-gray-700">Experience the future of web app development with our AI-driven platform.</h5>
                </section>

                {/* Basic Detail */}

                <section className='mt-6'>
                    {/* <div >
                        <label htmlFor="profilePhoto" className="block text-sm font-medium leading-6 text-gray-900">
                            Profile Photo
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-4">
                            <div className="text-center">
                                {profilePhoto ? <img className="mx-auto h-12 w-12" src={URL.createObjectURL(profilePhoto)} alt="Profile" /> :
                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />}
                                <div className="mt-4 flex flex-row items-center text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="profilePhoto"
                                        className="relative cursor-pointer py-1 px-2 rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload an Image</span>
                                        <input id="profilePhoto" name="profilePhoto" type="file" className="sr-only" onChange={handlePhotoChange} />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG up to 10MB</p>

                            </div>
                        </div>
                    </div> */}
                    <div className="flex flex-row justify-between items-center mt-4">
                        <div >
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    value={firstName}
                                    onChange={(event) => setFirstName(event.target.value)}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div >
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    value={lastName}
                                    onChange={(event) => setLastName(event.target.value)}
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="Occupation" className="block text-sm font-medium leading-6 text-gray-900">
                            Occupation
                        </label>
                        <div className="mt-2">
                            <select
                                id="Occupation"
                                name="Occupation"
                                autoComplete="Occupation-name"
                                value={selectedOccupation}
                                onChange={handleOccupationChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option value="Developer">Developer</option>
                                <option value="Student">Student</option>
                                <option value="Organisation">Organisation</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-4">
                        <div >
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="country"
                                    id="country"
                                    value={country}
                                    onChange={event => setCountry(event.target.value)}
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                ZIP / Postal code
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    value={pincode}
                                    onChange={event => setPincode(event.target.value)}
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="Full-address" className="block text-sm font-medium leading-6 text-gray-900">
                            Full address
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="Full-address"
                                id="Full-address"
                                value={address}
                                onChange={event => setaddress(event.target.value)}
                                autoComplete="Full-address"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <fieldset className='mt-4'>
                        <legend className="block text-sm font-medium leading-6 text-gray-900">Choose your field of Interests</legend>
                        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 items-center justify-around">
                            {Interests.map((interest) => (
                                <div className="relative flex gap-x-3 items-center" key={interest}>
                                    <input
                                        id={interest}
                                        name={interest}
                                        type="checkbox"
                                        checked={selectedInterests.includes(interest)}
                                        onChange={() => handleInterestChange(interest)}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <p className="text-sm leading-6 font-normal text-gray-900">{interest}</p>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </section>
            </div>
            <div className="flex flex-col justify-start items-center mb-6">
                <div className="flex flex-col mt-10 max-w-4xl rounded-3xl ring-1 ring-gray-200">
                    <div className="flex flex-row justify-around items-start">
                        <div className="px-8 pt-8 sm:px-10 sm:pt-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Learner Access</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Unleash your creativity with our platform's exquisite UI and UX creation capabilities. Design seamlessly using drag and drop components, powered by image and speech recognition. Experience real-time auto-generated code for any language or framework, offering unmatched flexibility. Transform your creation into a production-level masterpiece with auto connections between APIs, databases, servers, and front-end code. Join our thriving community, fostering collaboration and limitless possibilities for creators, developers, learners, and collaborators.
                            </p>

                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <div className="mx-auto max-w-xs px-8">
                                    <p className="text-base font-semibold text-gray-600">Get it for free</p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">₹0</span>
                                        <span className="text-xs font-semibold leading-6 tracking-wide text-gray-600">Rupee</span>
                                    </p>
                                    <button
                                        onClick={handleSubmit}
                                        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Get access
                                    </button>
                                    <p className="mt-6 text-xs leading-5 text-gray-600">
                                        ... for ultimate access to the platform try PRO Access
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-10 pb-10 ">
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 max-w-7xl grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-3 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <p className='mt-4 text-sm leading-6 text-gray-600'>...more and more beyound the thoughts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Signup;