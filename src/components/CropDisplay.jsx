import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CropDisplay = ({cropData,cropEst,cropFertilizer,cropDisease,cropHarvesting,climate,variety,pest}) => {
    // console.log(cropEst)
  return (
    <Box sx={{ p: 4, mt: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', gap: 4, mb: 2, flexWrap: 'wrap' ,alignItems:'center'}}>
        <Typography variant="h4" fontWeight="bold">
          {cropData[0]?.crop_name}
        </Typography>
        <Typography variant="h5">{cropData[0]?.family}</Typography>
        <Typography variant="subtitle1" fontStyle="italic">
          {cropData[0]?.scientific_name}
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Climate Requirements Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold">
            Climate Requirements
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {climate?.map((cl) => (
            <Box key={cl.id} mb={4}>
              <Typography variant="subtitle1" fontWeight="medium">
                Climatic Requirement
              </Typography>
              <Typography paragraph>{cl.climatic_requirement}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Altitude Range
              </Typography>
              <Typography paragraph>{cl.altitude_range}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Soil Type
              </Typography>
              <Typography paragraph>{cl.soil_type}</Typography>

              {cl.soil_pH_range && (
                <>
                  <Typography variant="subtitle1" fontWeight="medium">
                    Soil pH Range
                  </Typography>
                  <Typography paragraph>{cl.soil_pH_range}</Typography>
                </>
              )}
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Crop Establishment Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold">
            Crop Establishment
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {cropEst?.map((est, index) => (
            <Box key={index} mb={3}>
              <Typography variant="subtitle1" fontWeight="medium">
                Field Preparation
              </Typography>
              <Typography paragraph>{est.field_preparation}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Nursery Practices
              </Typography>
              <Typography paragraph>{est.nursery_practices}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Other Practices
              </Typography>
              <Typography paragraph>{est.other_practices}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Planting Material
              </Typography>
              <Typography paragraph>{est.planting_material}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Planting Method
              </Typography>
              <Typography paragraph>{est.planting_method}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Pre Planting Treatment
              </Typography>
              <Typography paragraph>{est.pre_planting_treatment}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Spacing
              </Typography>
              <Typography paragraph>{est.spacing}</Typography>

              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Fertilizer Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold">
            Fertilizer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {cropFertilizer?.map((item, index) => (
            <Box key={index} mb={3}>
              <Typography variant="h6">Basal Application</Typography>
              <Typography paragraph>{item.basal_application}</Typography>

              <Typography variant="h6">Fertilizer Mix</Typography>
              <Typography paragraph>{item.fertilizer_mix}</Typography>

              <Typography variant="h6">Organic Fertilizer</Typography>
              <Typography paragraph>{item.organic_fertilizer}</Typography>

              <Typography variant="h6">Remarks</Typography>
              <Typography paragraph>{item.remarks}</Typography>

              <Typography variant="h6">Subsequent Applications</Typography>
              <Typography paragraph>{item.subsequent_applications}</Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
      {/* Pests Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold">
            Pests
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {pest?.map((p) => (
            <Box key={p.id} mb={4}>
              <Typography variant="subtitle1" fontWeight="medium">
                Pest Name
              </Typography>
              <Typography paragraph>{p.pest_name}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Scientific Name
              </Typography>
              <Typography paragraph>{p.scientific_name}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Description
              </Typography>
              <Typography paragraph>{p.description}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Damage
              </Typography>
              <Typography paragraph>{p.damage}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Control Measures
              </Typography>
              <Typography paragraph>{p.control_measures}</Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Crop Diseases Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold">
            Crop Diseases
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {cropDisease?.map((disease) => (
            <Box key={disease.id} mb={4}>
              <Typography variant="subtitle1" fontWeight="medium">
                Disease Name
              </Typography>
              <Typography paragraph>{disease.disease_name}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Causal Agent
              </Typography>
              <Typography paragraph>{disease.causal_agent}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Symptoms
              </Typography>
              <Typography paragraph>{disease.symptoms}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Control Measures
              </Typography>
              <Typography paragraph>{disease.control_measures}</Typography>
              <hr />
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Harvesting Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold">
            Harvesting
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {cropHarvesting?.map((harvest) => (
            <Box key={harvest.id} mb={4}>
              <Typography variant="subtitle1" fontWeight="medium">
                Harvesting Time
              </Typography>
              <Typography paragraph>{harvest.harvesting_time}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Harvesting Method
              </Typography>
              <Typography paragraph>{harvest.harvesting_method}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Post-Harvest Practices
              </Typography>
              <Typography paragraph>{harvest.post_harvest_practices}</Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>


      {/* Varieties Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold">
            Varieties
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {variety?.map((varie) => (
            <Box key={varie.id} mb={4}>
              <Typography variant="subtitle1" fontWeight="medium">
                Variety Name
              </Typography>
              <Typography paragraph>{varie.variety_name}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Characteristics
              </Typography>
              <Typography paragraph>{varie.characteristics}</Typography>

              <Typography variant="subtitle1" fontWeight="medium">
                Yield
              </Typography>
              <Typography paragraph>{varie.yield}</Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      
    </Box>
  )
}

export default CropDisplay