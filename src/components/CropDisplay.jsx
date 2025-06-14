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

const CropDisplay = ({cropData,cropEst,cropFertilizer,cropDisease,cropHarvesting,climate,variety,pest,price,loans}) => {
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
          <Typography variant="h5" fontWeight="bold" style={{paddingLeft: '10px'}}>
            Climate Requirements
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='flex justify-center'>
          {climate?.map((cl) => (
            <Box key={cl.id} mb={4} width={6/7}>
              <Typography variant="subtitle1" fontWeight="bold">
                Climatic Requirement
              </Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{cl.climatic_requirement}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Altitude Range
              </Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{cl.altitude_range}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Soil Type
              </Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{cl.soil_type}</Typography>

              {cl.soil_pH_range && (
                <>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Soil pH Range
                  </Typography>
                  <Typography style={{padding:'6px', fontWeight:'lighter'}}>{cl.soil_pH_range}</Typography>
                </>
              )}
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Crop Establishment Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold" style={{paddingLeft: '10px'}}>
            Crop Establishment
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='flex justify-center'>
          {cropEst?.map((est, index) => (
            <Box key={index} mb={3} width={6/7}>
              <Typography variant="subtitle1" fontWeight="bold">
                Field Preparation
              </Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{est.field_preparation}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Nursery Practices
              </Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{est.nursery_practices}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Other Practices
              </Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{est.other_practices}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Planting Material
              </Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{est.planting_material}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Planting Method
              </Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{est.planting_method}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Pre Planting Treatment
              </Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{est.pre_planting_treatment}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Spacing
              </Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{est.spacing}</Typography>

              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Fertilizer Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold" style={{paddingLeft: '10px'}}>
            Fertilizer
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='flex justify-center'>
          {cropFertilizer?.map((item, index) => (
            <Box key={index} mb={3} width={6/7}>
              <Typography variant="subtitle1" fontWeight="bold">Basal Application</Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{item.basal_application}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">Fertilizer Mix</Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{item.fertilizer_mix}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">Organic Fertilizer</Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{item.organic_fertilizer}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">Remarks</Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{item.remarks}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">Subsequent Applications</Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{item.subsequent_applications}</Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
      {/* Pests Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold" style={{paddingLeft: '10px'}}>
            Pests
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="flex justify-center">
        <div className="w-4/5 mx-auto">
          {pest?.map((p) => (
            <Box key={p.id} mb={2}>
              <Typography variant="subtitle1" fontWeight="bold">
                Pest Name
              </Typography>
              <Typography style={{ padding: '6px', fontWeight: 'lighter' }}>{p.pest_name}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Scientific Name
              </Typography>
              <Typography style={{ padding: '6px', fontWeight: 'lighter' }}>{p.scientific_name}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Description
              </Typography>
              <Typography style={{ padding: '6px', fontWeight: 'lighter' }}>{p.description}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Damage
              </Typography>
              <Typography style={{ padding: '6px', fontWeight: 'lighter' }}>{p.damage}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Control Measures
              </Typography>
              <Typography style={{ padding: '6px', fontWeight: 'lighter' }}>{p.control_measures}</Typography>
               <img
                src={`http://localhost:4000${p.image_path}`} 
                alt={p.pest_name}
                style={{ maxWidth: "300px", height: "auto" }}
              />
              <hr />
            </Box>
          ))}
        </div>
      </AccordionDetails>

      </Accordion>

      {/* Crop Diseases Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold" style={{paddingLeft: '10px'}}>
            Crop Diseases
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="flex justify-center">
        <div className="w-4/5 mx-auto">
          {cropDisease?.map((disease) => (
            <Box key={disease.id} mb={4}>
              <Typography variant="subtitle1" fontWeight="bold">
                Disease Name
              </Typography>
              <Typography style={{ padding: '6px', fontWeight: 'lighter' }}>
                {disease.disease_name}
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Causal Agent
              </Typography>
              <Typography style={{ padding: '6px', fontWeight: 'lighter' }}>
                {disease.causal_agent}
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Symptoms
              </Typography>
              <Typography style={{ padding: '6px', fontWeight: 'lighter' }}>
                {disease.symptoms}
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Control Measures
              </Typography>
              <Typography style={{ padding: '6px', fontWeight: 'lighter' }}>
                {disease.control_measures}
              </Typography>
               <img
                src={`http://localhost:4000${disease.image_path}`} 
                alt={disease.disease_name}
                style={{ maxWidth: "300px", height: "auto" }}
              />
              <hr />
            </Box>
          ))}
        </div>
      </AccordionDetails>

      </Accordion>

      {/* Harvesting Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold" style={{paddingLeft: '10px'}}>
            Harvesting
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='flex justify-center'>
          {cropHarvesting?.map((harvest) => (
            <Box key={harvest.id} mb={4} width={6/7}>
              <Typography variant="subtitle1" fontWeight="bold" >
                Harvesting Time
              </Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{harvest.harvesting_time}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Harvesting Method
              </Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{harvest.harvesting_method}</Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Post-Harvest Practices
              </Typography>
              <Typography style={{padding:'6px', fontWeight:'lighter'}}>{harvest.post_harvest_practices}</Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>


      {/* Varieties Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold" style={{paddingLeft: '10px'}}>
            Varieties
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="flex justify-center">
          <div className="w-4/5 mx-auto">
            {variety?.map((varie) => (
              <Box key={varie.id} mb={4}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Variety Name
                </Typography>
                <Typography style={{ paddingLeft: '6px', fontWeight: 'lighter' }}>
                  {varie.variety_name}
                </Typography>

                <Typography variant="subtitle1" fontWeight="bold">
                  Characteristics
                </Typography>
                <Typography style={{ paddingLeft: '6px', fontWeight: 'lighter' }}>
                  {varie.characteristics}
                </Typography>

                <Typography variant="subtitle1" fontWeight="bold">
                  Yield
                </Typography>
                <Typography style={{ paddingLeft: '6px', fontWeight: 'lighter' }}>
                  {varie.yield}
                </Typography>
                <hr />
              </Box>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      {/* Prices Accordion */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold" style={{paddingLeft: '10px'}}>
            Prices
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full text-left">
              <thead className="bg-green-100 rounded-t-lg">
                <tr className=''>
                  <th className="px-4 py-2 ">Crop Name</th>
                  <th className="px-4 py-2 ">District</th>
                  <th className="px-4 py-2 ">Date</th>
                  <th className="px-4 py-2 ">Price</th>
                </tr>
              </thead>
              <tbody>
                {price?.map((item) => (
                  <tr key={item.price_id} className="hover:bg-green-50">
                    <td className="px-4 py-2 ">{item.crop_name}</td>
                    <td className="px-4 py-2 ">{item.district}</td>
                    <td className="px-4 py-2 ">
                      {new Date(item.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 ">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" fontWeight="bold" style={{ paddingLeft: '10px' }}>
            Loan Schemes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full text-left">
              <thead className="bg-green-100">
                <tr>
                  <th className="px-4 py-2">Scheme Name</th>
                  <th className="px-4 py-2">Provider</th>
                  <th className="px-4 py-2">Interest Rate</th>
                  <th className="px-4 py-2">Max Amount</th>
                  <th className="px-4 py-2">Eligibility</th>
                </tr>
              </thead>
              <tbody>
                {loans?.map((loan) => (
                  <tr key={loan.loan_id} className="hover:bg-green-50">
                    <td className="px-4 py-2">{loan.scheme_name}</td>
                    <td className="px-4 py-2">{loan.provider}</td>
                    <td className="px-4 py-2">{loan.interest_rate}</td>
                    <td className="px-4 py-2">{loan.maximum_amount}</td>
                    <td className="px-4 py-2">{loan.eligibility_criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default CropDisplay