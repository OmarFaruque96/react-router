export default function Contact() {
  return (
    <div className="contact-body">
        <h3>Contact Form</h3>
            <div class="container">
            <form >
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." /> <br/> <br/> 

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." /> <br/> <br/> 

                <label for="country">Country</label>
                <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                </select>
                <br/> <br/> 
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                <br/> <br/> 
                <input type="submit" value="Submit" />
            </form>
            </div>
    </div>
  )
}
