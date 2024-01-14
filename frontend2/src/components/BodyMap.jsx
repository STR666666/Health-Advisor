import React, { useState } from 'react';

const BodyMap = () => {

  const [checkedSymptoms, setUserSymptoms] = useState([]);
  const [hoveredArea, setHoveredArea] = useState(null);
  const [showSymptomModal, setShowSymptomModal] = useState(false);

  const handleMouseOver = (target) => {
    // want to display window with list of symptoms
    if (target === "P") {
      const pelvis_symptom = [];

      pelvis_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          checkedSymptoms.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((s) => s !== symptom));
        }
      });
    };
    if (target === "N") {
      const neck_symptom = [];

      neck_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          checkedSymptoms.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((s) => s !== symptom));
        }
      });
    }
    if (target === "C") {
      const chest_symptom = [];

      chest_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          checkedSymptoms.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((s) => s !== symptom));
        }
      });
    }
    if (target === "A") {
      const abdomen_symptom = [];

      abdomen_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          checkedSymptoms.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((s) => s !== symptom));
        }
      });
    }
    if (target === "H") {
      const head_symptom = [];

      head_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          checkedSymptoms.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((s) => s !== symptom));
        }
      });
    }
    if (target === "Sh_R" || target === "Sh_L") {
      const shoulder_symptom = [];
      shoulder_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          checkedSymptoms.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((s) => s !== symptom));
        }
      });
    }
    if (target === "Bi_R" || target === "Bi_L") {
      const bicep_symptom = [];
      bicep_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          checkedSymptoms.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((s) => s !== symptom));
        }
      });
    }
    if (target === "Frm_R" || target === "Frm_L") {
      const forearm_symptom = [];
      forearm_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          forearm_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((s) => s !== forearm_symptom));
        }
      });
    }
    if (target === "Hnd_L" || target === "Hnd_R") {
      const hand_symptom = [];
      hand_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          hand_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((hand_symptom) => hand_symptom !== symptom));
        }
      });
    }
    if (target === "Th_R" || target === "Th_L") {
      const thigh_symptom = [];
      thigh_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          thigh_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((thigh_symptom) => thigh_symptom !== symptom));
        }
      });
    }
    if (target === "K_R" || target === "K_L") {
      const knee_symptom = [];
      knee_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          knee_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((knee_symptom) => knee_symptom !== symptom));
        }
      });
    }
    if (target === "L_R" || target === "L_L") {
      const leg_symptom = [];
      leg_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          leg_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((leg_symptom) => leg_symptom !== symptom));
        }
      });
    }
    if (target === "Ft_R" || target === "Ft_L") {
      const foot_symptom = [];
      foot_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          foot_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((foot_symptom) => foot_symptom !== symptom));
        }
      });
    }
    if (target === "H_B") {
      const head_back_symptom = [];
      head_back_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          head-back_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((head_back_symptom) => head_back_symptom !== symptom));
        }
      });
    }
    if (target === "Bck") {
      const back_symptom = [];
      back_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          back_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((back_symptom) => back_symptom !== symptom));
        }
      });
    }
    if (target === "Tri_R" || target === "Tri_L") {
      const tricep_symptom = [];
      tricep_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          tricep_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((tricep_symptom) => tricep_symptom !== symptom));
        }
      });
    }
    if (target === "W_R" || target === "W_L") {
      const wrist_symptom = [];
      wrist_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          wrist_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((wrist_symptom) => wrist_symptom !== symptom));
        }
      });
    }
    if (target === "B") {
      const buttocks_symptom = [];
      buttocks_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          buttocks_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((buttocks_symptom) => buttocks_symptom !== symptom));
        }
      });
    }
    if (target === "Ham_R" || target === "Ham_L") {
      const hamstring_symptom = [];
      hamstring_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          hamstring_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((hamstring_symptom) => hamstring_symptom !== symptom));
        }
      });
    }
    if (target === "A_R" || target === "A_L") {
      const ankle_symptom = [];
      ankle_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          ankle_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((ankle_symptom) => ankle_symptom !== symptom));
        }
      });
    }
    if (target === "Hp") {
      const hip_symptom = [];
      hip_symptom.forEach((symptom) => {
        const isChecked = window.confirm(`Do you have ${symptom}?`);
        if (isChecked) {
          hip_symptom.push(symptom);
        }
        else {
          // If user unchecks, remove the symptom from the array
          setUserSymptoms((prevSymptoms) => prevSymptoms.filter((hip_symptom) => hip_symptom !== symptom));
        }
      });
    }
  };

  const handleMouseOut = () => {
    setHoveredArea(null);
  };

  const handleCheckboxChange = (symptom) => {
    // If user checks the box, add the symptom to the array
    if (!checkedSymptoms.includes(symptom)) {
      setUserSymptoms((prevSymptoms) => [...prevSymptoms, symptom]);
    }
    else {
      // If user unchecks, remove the symptom from the array
      setUserSymptoms((prevSymptoms) => prevSymptoms.filter((s) => s !== symptom));
    }
  };

  /* chatgpt's code
  const handleCheckboxChange = (symptom) => {
    // Toggle the symptom in the userSymptoms list
    setUserSymptoms((prevSymptoms) => {
      if (prevSymptoms.includes(symptom)) {
        return prevSymptoms.filter((s) => s !== symptom);
      } else {
        return [...prevSymptoms, symptom];
      }
    });
  }; */

  const handleSubmit = () => {
    // Now you can send userSymptoms to the backend or handle it as needed
    console.log('Final user symptoms:', checkedSymptoms);
    // Add backend API call here if needed
    fetch('your_backend_api_endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ symptoms: userSymptoms }),
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the backend if needed
      console.log('Backend response:', data);
    })
    .catch(error => {
      console.error('Error sending data to backend:', error);
    });
  };

  return ( 
    <>
      <img ref src={process.env.PUBLIC_URL + '/bodymap.jpg'} alt="Body Map" useMap="#image-map" onMouseOut={handleMouseOut} 
        onMouseOver={(e) => {
          const areaTarget = e.target.getAttribute('target');
          if (areaTarget) {
            setHoveredArea(areaTarget);
            handleMouseOver(areaTarget);
          }
        }}/>
      <map name="image-map">

      <area target="P" alt="Pelvis" title="Pelvis" href="" coords="130,194,162,190,162,157,156,147,139,169,120,167,111,155,105,146,100,154,98,190" shape="poly" />

      <area target="N" alt="Neck" title="Neck" href="" coords="119,57,119,49,127,55,134,55,142,48,142,57,152,62,161,67,97,68" shape="poly" />

      <area target="C" alt="Chest" title="Chest" href="" coords="107,67,98,68,96,80,98,88,102,97,102,106,103,113,123,114,126,107,135,107,139,114,157,114,159,102,158,96,163,87,162,79,158,67,151,67" shape="poly" />

      <area target="A" alt="Abdomen" title="Abdomen" href="" coords="104,144,121,168,139,168,157,146,155,137,154,126,156,114,138,114,135,106,127,106,123,113,104,113,106,123,107,134" shape="poly" />

      <area target="H" alt="Head" title="Head" href="" coords="115,28,112,31,112,37,115,43,118,43,120,50,126,54,134,55,142,47,142,43,146,41,149,36,149,33,148,30,145,29,145,24,145,20,141,15,135,12,131,12,128,12,124,13,121,15,117,18,115,21" shape="poly" />

      <area target="Sh_R" alt="Shoulder (R)" title="Shoulder (R)" href="" coords="86,93,91,99,99,92,96,84,96,80,97,67,91,70,88,76,86,85" shape="poly" />

      <area target="Sh_L" alt="Shoulder (L)" title="Shoulder (L)" href="" coords="159,67,164,67,169,69,173,75,174,81,174,88,173,95,171,99,161,93,163,87" shape="poly" />

      <area target="Bi_R" alt="Bicep (R)" title="Bicep (R)" href="" coords="87,96,86,109,86,118,90,129,94,130,99,123,103,123,104,114,101,102,102,95,99,92,92,99" shape="poly" />

      <area target="Bi_L" alt="Bicep (L)" title="Bicep (L)" href="" coords="160,92,157,97,160,103,158,112,157,118,159,123,165,129,171,131,174,121,175,113,174,101,173,94,170,99,169,98" shape="poly" />

      <area target="Frm_R" alt="Forearm (R)" title="Forearm (R)" href="" coords="88,129,83,127,80,133,79,139,77,144,76,158,74,165,87,167,99,147,102,135,103,132,103,130,94,130" shape="poly"/>

      <area target="Frm_L" alt="Forearm (L)" title="Forearm (L)" href="" coords="158,134,163,150,167,158,172,166,176,172,187,168,184,155,182,145,181,136,177,127" shape="poly"/>

      <area target="Hnd_L" alt="Hands (L)" title="Hands (L)" href="" coords="178,176,177,184,181,193,182,202,185,206,187,204,190,210,193,208,196,210,198,207,196,196,201,205,202,202,198,191,197,186,202,189,206,190,200,181,195,175,189,172" shape="poly"/>

      <area target="Th_R" alt="Thigh (R)" title="Thigh (R)" href="" coords="97,190,99,207,104,226,106,233,129,234,128,206,130,195" shape="poly"/>

      <area target="Th_L" alt="Thigh (L)" title="Thigh (L)" href="" coords="131,195,132,207,132,235,154,234,160,218,162,190" shape="poly"/>

      <area target="K_R" alt="Knee (R)" title="Knee (R)" href="" coords="106,234,108,250,116,255,121,255,127,255,129,244,129,234" shape="poly"/>

      <area target="K_L" alt="Knee (L)" title="Knee (L)" href="" coords="132,236,132,245,133,253,139,255,146,256,152,252,154,246,154,235" shape="poly"/>

      <area target="L_R" alt="Leg (R)" title="Leg (R)" href="" coords="107,249,107,265,107,274,110,281,112,290,115,302,116,313,127,315,127,311,126,301,129,285,130,275,127,251,127,256,115,255,111,252" shape="poly"/>

      <area target="L_L" alt="Leg (L)" title="Leg (L)" href="" coords="132,251,132,262,130,270,132,287,134,299,134,310,133,315,138,316,145,313,145,302,150,284,153,271,152,257,152,250,147,256,138,254,134,251,134,252" shape="poly"/>

      <area target="Ft_R" alt="Foot (R)" title="Foot (R)" href="" coords="114,321,113,326,112,330,103,337,111,343,119,343,123,339,127,333,128,326" shape="poly"/>

      <area target="Ft_L" alt="Foot (L)" title="Foot (L)" href="" coords="145,322,148,327,152,332,158,337,152,342,144,343,135,338,134,335,131,331,133,326" shape="poly"/>

      <area target="Hnd_R" alt="Hands (R)" title="Hands (R)" href="" coords="72,170,64,177,53,188,55,192,59,190,65,185,59,202,59,205,63,202,66,194,64,201,64,210,69,207,70,211,73,205,76,205,79,199,80,192,83,183,83,174" shape="poly"/>

      <area target="H_B" alt="Head (back)" title="Head (back)" href="" coords="310,18,313,13,321,9,331,8,338,13,341,18,341,29,343,31,342,40,338,44,313,43,309,42,308,29" shape="poly"/>

      <area target="N" alt="Neck" title="Neck" href="" coords="344,57,338,54,338,44,314,43,314,53,308,57" shape="poly"/>

      <area target="Bck" alt="Back" title="Back" href="" coords="306,57,289,66,289,86,293,97,295,110,300,120,299,130,352,130,351,119,354,110,358,102,361,87,363,67,353,60,345,57" shape="poly"/>

      <area target="Tri_R" alt="Tricep (R)" title="Tricep (R)" href="" coords="278,114,280,124,287,128,293,129,296,121,296,112,292,102,291,91,289,88,280,90,278,102" shape="poly"/>

      <area target="Tri_L" alt="Tricep (L)" title="Tricep (L)" href="" coords="361,91,371,92,372,102,374,120,366,128,357,127,353,113" shape="poly"/>

      <area target="W_R" alt="Wrist (R)" title="Wrist (R)" href="" coords="72,169,85,174,87,167,74,165" shape="poly"/>

      <area target="W_L" alt="Wrist (L)" title="Wrist (L)" href="" coords="190,172,178,176,175,172,187,168" shape="poly"/>

      <area target="B" alt="Buttocks" title="Buttocks" href="" coords="301,136,311,135,316,138,321,148,330,148,335,139,340,135,346,136,351,139,355,143,354,155,357,172,356,175,347,178,338,182,330,180,325,178,319,182,312,181,307,180,300,176,294,172,294,161,297,152,296,145" shape="poly"/>

      <area target="Ham_R" alt="Hamstring (R)" title="Hamstring (R)" href="" coords="294,173,295,195,302,222,303,232,311,231,317,235,323,235,325,177,319,183,305,181" shape="poly"/>

      <area target="Ham_L" alt="Hamstring (L)" title="Hamstring (L)" href="" coords="326,179,328,216,327,228,328,234,335,235,340,231,348,232,352,211,355,203,356,186,357,174,349,178,338,183,333,181" shape="poly"/>

      <area target="A_R" alt="Ankle (R)" title="Ankle (R)" href="" coords="115,312,115,320,127,326,128,315" shape="poly"/>

      <area target="A_L" alt="Ankle (L)" title="Ankle (L)" href="" coords="132,316,138,316,145,314,146,321,133,325" shape="poly"/>

      <area target="Hp" alt="Hips" title="Hips" href="" coords="484,150,474,175,476,191,483,193,514,175,516,157,513,153,500,150" shape="poly"/>
        {/* Add more area elements as needed */}
      </map>

      {showSymptomModal && (
        <div>
          <h2>Select Symptoms for {hoveredArea}</h2>
          <form>
            {symptomsByArea[hoveredArea].map((symptom) => (
              <div key={symptom}>
                <label>
                  <input
                    type="checkbox"
                    checked={userSymptoms.includes(symptom)}
                    onChange={() => handleCheckboxChange(symptom)}
                  />
                  {symptom}
                </label>
              </div>
            ))}
          </form>
          <button onClick={() => setShowSymptomModal(false)}>Close</button>
        </div>
      )}

      {/* Button to trigger symptom selection */}
      {hoveredArea && (
        <button onClick={() => setShowSymptomModal(true)}>
          Select Symptoms for {hoveredArea}
        </button>
      )}
      <button onClick={handleSubmit}>Submit Symptoms</button>
    </>
  );
};

export default BodyMap;