import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./GroupCarousel.css";

const GroupCarousel = (props) => { 

  const [selectedGroups, setSelectedGroups] = useState([]);

  const getGroups = (groups) => {

    return groups.map(function (group) {
      return (
        <motion.div 
          className="group-carousel-image-container"
          onClick={() => {
            const _selectedGroups = [...selectedGroups];
            if (selectedGroups.includes(group.alphanumeric_id)) {
              const index = _selectedGroups.findIndex(i => i == group.alphanumeric_id);
              _selectedGroups.splice(index, 1);
              setSelectedGroups(_selectedGroups);
            } else {
              _selectedGroups.push(group.alphanumeric_id);
              setSelectedGroups(_selectedGroups);
            }
          }}
          initial={{ opacity: 0.5 }}
          animate={selectedGroups.includes(group.alphanumeric_id) ? { opacity: 1 } : { opacity : 0.5 }}
        >
          <img src={`${process.env.REACT_APP_API_DOMAIN}/${group.image_url}`}/>
        </motion.div>
      );
    });
  };
  
  return (
    <div className="groups-carousel">
      {getGroups(props.groups)}
    </div>
  );
}

export default GroupCarousel;