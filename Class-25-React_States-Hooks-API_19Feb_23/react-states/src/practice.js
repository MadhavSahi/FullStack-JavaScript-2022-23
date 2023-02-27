import React, { useState } from 'react';

function Practice() {

	const [data, setData] = useState({
		username: '',
		password: ''
	});
	console.log(data);
	const [form, setForm] = useState({
		username: '',
		password: ''
	});
	const [submit, submitted] = useState(false);

	const updateValues = (e) => {
		e.preventDefault();
		setForm({
				username: data.username,
				password: data.password
			});
		submitted(true);
	};

	const updateField = (e) => {
		setData({
				...data, [e.target.name]: e.target.value
			});
	};

return (
	<div>
	    <form>
			<br/><br/>

	        <label>
		        Username:
		    <input
                name="username"
				type="text"
                onChange={updateField}
                value={data.username}
            />
	        </label>

	        <br/><br/>

	        <label>
		        Password:
		    <input
                name="password"
                type="password"
                onChange={updateField}
		        value={data.password}
		    />
	        </label>

	        <br /><br />

	        <button onClick={updateValues}>Submit</button>
	    </form>
	        
        <p>{submit ? form.username : null}</p>
        <p>{submit ? form.password : null}</p>

    </div> 
    );
};

export default Practice;

//Few Basics first to understnad the yellow highlighted code
// A> event.target - The target event property returns the element that triggered the event. The target property gets the element on which the event originally occurred. So, event.target references DOM element.

// https://www.w3schools.com/jsref/event_target.asp

// B> HTML name Attribute - This is a native-html element in browser. The name attribute specifies the name of an element.

// The name attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted.

// Note: Only form elements with a name attribute will have their values passed when submitting a form.
// https://www.w3schools.com/tags/att_input_name.asp

// C> HTML value Attribute - Just like this is a native-html element in browser. As it happens, the DOM node for an element has a ‘value’ property that holds its latest value. I am accessing this from within an handleChange() or onChange() function by e.target.value 

// [e.target.name] : e.target.value > --- EXPLANATION -
// My purpose here in the above is that - (i) Whatever I type in the 2 input elements within form section, it should update the "title" and "body" states by assigning that typed text as the 2 state's assigned-values.
//(ii) So, to achieve that, I have to first find a hook to grab, for example the first state which is "title". So, when I am typing in the 'title' section of the html > that means < e.target.name > is 'title' and so, > My hook for grabbing that state, is < e.target.name > and then I am setting that equal to the value of 'value' attribute ( value being a property of DOM node's <input> element ) with < e.target.value >
//( Note as mentioned above, all DOM node for an <input> element has a 'value' property and also a 'name' property - these are native html properties of the browser )

//> And in the above line the part within square-bracket [e.target.name] is called the computed property value (a new addition to ES6) and I am setting that to be equal to e.target.value

// C> So, I am creating the onChange() function, which will update whatever the current states to the new value of <e.target.value> And then in the return section I will just invoke this function. I am setting e.target.name which is currently "title" and "body" initially to be assigned to whatever I type (which will be captured by the code < e.target.value> )

// D> In the React-Dev-Tool, I can check this with a running server >

// In React-Dev-Tool > Expand App > Expand Postform - that as soon as I am typing something to the 2 input elements, whose name attributes are “title” and “body” respectively - the 2 states in my Postform component is immediately updated to those typed-strings. And for this state updates to happen, I dont need (checked by me by commenting those 2 lines out) the below 2 lines in the return section ( as the state updates is completely taken care of by the onChange function)

// value={this.state.title} value={this.state.body}