import { useState } from "react";

export default function Dashboard(){
	const [selAll, setSelAll] = useState(false);
  const [inp, setAllinp] = useState({
    a:false,
    b:false,
    c:false,
    d:false
  });

  //status version
  const [status, setStatus] = useState({
    a:false,
    b:false,
    c:false,
    d:false
  });


	const selAllClick = (e) => {
		const val = e.target.checked
		console.log(val);
    setSelAll(val);


    if (val == true) {
      const updatedInp = {};
      for (const key in inp) {
        updatedInp[key] = true;
      }
      setAllinp(updatedInp);
    }

    // if(val == true){
    //   setAllinp({
    //     a:true,
    //     b:true,
    //     c:true,
    //     d:true
    //   })
    // }

    if(val == false){
      setAllinp({
        a:false,
        b:false,
        c:false,
        d:false
      })
    }
	}

  const selInpClick = (e) => {
      const name = e.target.name;
      const val = e.target.checked;
      console.log(name, val);

      setAllinp(prev => (
        {
          ...prev,
          [name]: val,
        }
      ));

      const allTrue = Object.values({
        ...inp, // Combine previous and updated state
        [name]: val // Update the specific checkbox state
      }).every(value => value === true);
  
      // Update selAll state accordingly
      setSelAll(allTrue);
  }


  // useEffect(() => {
  //   const allTrue = Object.values(inp).every(value => value === true);
  //   if(allTrue) {
  //     setSelAll(true);
  //   }
  //   else{
  //     setSelAll(false);
  //   }
  // },[inp])

  console.log(inp);

	return (
		// <>
		// 	<p>asda</p>
		// 	<lable>Select</lable>
		// 	<input checked={selAll} onClick={(e) => selAllClick(e)} type="checkbox" />
		// 	<div>
		// 		<lable>A</lable>
		// 		<input checked={inp.a} name="a" onClick={(e) => selInpClick(e)} type="checkbox" />
    //     <br/>
		// 		<lable>B</lable>
		// 		<input checked={inp.b} name="b" onClick={(e) => selInpClick(e)} type="checkbox" />
    //     <br/>
		// 		<lable>C</lable>
		// 		<input checked={inp.c} name="c" onClick={(e) => selInpClick(e)} type="checkbox" />
    //     <br/>
		// 		<lable>D</lable>
		// 		<input checked={inp.d} name="d" onClick={(e) => selInpClick(e)} type="checkbox" />
		// 	</div>
		// </>

      //status version
    <>
			<p>asda</p>
			<lable>Select</lable>
			<input checked={status.a && status.b && status.c && status.d} onClick={(e) => setStatus(prev => (
        {
          a:e.target.checked,
          b:e.target.checked,
          c:e.target.checked,
          d:e.target.checked
        }
      ))} type="checkbox" />
			<div>
				<lable>A</lable>
				<input checked={status.a} name="a" onClick={(e) => setStatus(
          prev => (
            {
              ...prev,
              a : e.target.checked
            }
          )
        )} type="checkbox" />
        <br/>
				<lable>B</lable>
				<input checked={status.b} name="b" onClick={(e) => setStatus(
          prev => (
            {
              ...prev,
              b : e.target.checked
            }
          )
        )} type="checkbox" />
        <br/>
				<lable>C</lable>
				<input checked={status.c} name="c" onClick={(e) => setStatus(
          prev => (
            {
              ...prev,
              c : e.target.checked
            }
          )
        )} type="checkbox" />
        <br/>
				<lable>D</lable>
				<input checked={status.d} name="d" onClick={(e) => setStatus(
          prev => (
            {
              ...prev,
              d : e.target.checked
            }
          )
        )} type="checkbox" />
			</div>
		</>
	)
}