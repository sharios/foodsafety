/* Original learning scenarios, not official exam questions. Source sections are
   concept references to the Food Code currently linked on the DM website. */
const BANK_INFO = { version: 1, checked: '2026-10-06', officialExamQuestions: false,
  source: 'https://dmpmedia.dm.gov.ae/uploads/2024/10/Food-Code-2013-English.pdf',
  sourceTitle: 'Dubai Municipality Food Code (2013 edition, currently linked by DM)',
  note: 'Original practice questions. No public official exam question bank was located. Trainer review is recommended, especially for temperature procedures and equivalent processes.' };
const QUESTION_TOPICS = [
{id:'hands',name:'Clean hands',icon:'🧼',section:'5.3; 2.18',rows:[
['I have used the toilet. What next?','Wash and dry my hands','Put on gloves only','Wipe hands on my uniform','Wash before returning to food.'],
['I handled raw chicken. What next?','Wash and dry my hands','Touch the salad','Wipe hands on an apron','Raw-food hands need washing.'],
['I coughed into my hand. What next?','Wash my hands','Carry on serving','Wipe my hand on a cloth','Wash after coughing or sneezing.'],
['I emptied the bin. What next?','Wash my hands','Prepare sandwiches now','Put clean food in the bin area','Waste can contaminate hands.'],
['I am putting on gloves. What first?','Wash and dry my hands','Skip handwashing','Rub hands on my sleeves','Gloves do not replace handwashing.'],
['Which sink do I use for my hands?','The handwashing sink','The sink holding dirty dishes','A bucket of used water','Use the sink meant for hands.'],
['There is no soap at the hand sink. What do I do?','Tell my supervisor and get soap','Wash without soap then cook','Use a dry paper towel only','Ask for the handwashing supplies.'],
['I return from a break. What first?','Wash my hands','Serve food immediately','Put my phone beside food','Begin food work with clean hands.']
]},
{id:'hygiene',name:'Ready for work',icon:'👨‍🍳',section:'5.3; 5.4',rows:[
['My uniform is dirty. What do I do?','Change to a clean uniform','Keep wearing it for food work','Cover the dirt with flour','Start work in clean clothing.'],
['My hair is loose. What do I do?','Put on my hair covering','Shake my hair over the food','Touch it while serving','Keep hair away from food.'],
['My nails are long and dirty. What do I need?','Short clean nails','Nail polish to cover the dirt','Longer nails','Keep nails clean and short.'],
['Where does my phone belong during food work?','Away from food preparation','On the chopping board','Inside the salad bowl','Keep personal things away from food.'],
['I touch my face while working. What next?','Wash my hands before food work','Continue making sandwiches','Touch the clean plates','Wash after contaminating hands.'],
['Where can I eat my snack?','In the designated break area','Over the open food','While putting food on plates','Use the designated eating area.'],
['I wear a loose bracelet. What should I do?','Remove it before food work','Hang it above the soup','Hide it inside the food glove','Loose jewellery can fall into food.'],
['A visitor enters the kitchen. What should happen?','Follow the kitchen hygiene rules','Ignore hygiene because it is a visit','Touch every ready meal','Visitors must protect food too.']
]},
{id:'illness',name:'Illness and cuts',icon:'🤒',section:'5.1; 5.2',rows:[
['I have diarrhoea before my shift. What do I do?','Tell my supervisor before handling food','Hide it and start cooking','Prepare cold food instead','Report illness before food work.'],
['I vomited at work. What do I do?','Stop food work and tell my supervisor','Keep serving meals','Only change my apron','Stop and report vomiting.'],
['I have fever and feel unwell. Who do I tell?','My supervisor','Nobody','Only a customer','Report illness to the person in charge.'],
['My hand has an infected cut. What do I do?','Report it and stop handling food','Hide it under a dirty cloth','Handle food with that hand','An infected wound needs reporting.'],
['My small clean cut needs protection. What is suitable?','A visible waterproof dressing','An uncovered cut','A loose tissue','Ask your trainer to protect the cut properly.'],
['My wound dressing falls off. What do I do?','Stop and tell my supervisor','Pretend nothing happened','Put it back from the floor','Report a missing dressing immediately.'],
['Someone at home has a diagnosed communicable illness. What do I do?','Tell my supervisor','Keep it secret','Decide there is never a risk','Report relevant illness exposure.'],
['I am returning after a foodborne illness. Who confirms I can return?','My supervisor using the required medical advice','I decide while still sick','A customer','Follow the return-to-work requirements.']
]},
{id:'separate',name:'Raw and ready food',icon:'🥗',section:'3.2.5; 3.4.1',rows:[
['Where should covered raw chicken go in a shared fridge?','Below ready-to-eat food','Above the salad','On top of cooked rice','Keep raw drips away from ready food.'],
['A knife cut raw chicken. Can I use it for salad now?','No. Use a separate clean disinfected knife','Yes, without cleaning','Yes, if I wipe it on my clothes','Protect ready food from raw contamination.'],
['Which board should I use for a ready-to-eat sandwich?','The designated clean ready-food board','The dirty raw-meat board','A board on the floor','Use the correct separate board.'],
['Raw chicken juice reaches salad. What do I do?','Stop using the salad and tell my supervisor','Mix the salad to hide it','Serve it quickly','Report contaminated ready food.'],
['Frozen meat is dripping while thawing. What do I need?','A container that catches the drips','Salad underneath to catch drips','An open shelf above desserts','Keep thawing drips contained.'],
['I change from raw meat to ready food. What do I do?','Wash hands and use clean equipment','Keep the same dirty gloves','Use the same dirty knife','Separate hands and equipment from raw contamination.'],
['Which food is ready-to-eat?','A prepared sandwich','Raw chicken needing cooking','Uncooked minced meat','Ready-to-eat food needs no further cooking.'],
['A clean plate touches a raw-meat surface. What next?','Replace it with a clean disinfected plate','Serve dessert on it','Wipe it with my sleeve','Food-contact items must stay clean.']
]},
{id:'temperature',name:'Cold and hot temperatures',icon:'🌡️',section:'3.2.3.1; 3.2.10; 3.6.2',rows:[
['What is the normal cold-holding limit for high-risk food?','5°C or below','25°C','45°C','Cold holding: no warmer than 5°C.'],
['What is the minimum hot-holding temperature?','60°C','20°C','40°C','Hot holding: at least 60°C.'],
['Chilled food reads 4°C. Is it within the cold-holding limit?','Yes, for temperature only','No, it is too warm','It proves every aspect is safe','4°C meets the cold limit; other checks still matter.'],
['Chilled food reads 12°C. What do I do?','Report the reading and follow corrective action','Ignore it','Serve because it feels cool','12°C is above the cold-holding limit.'],
['Hot soup is being held at 45°C. What do I do?','Report it and follow the workplace procedure','Keep serving without checking','Add cold water','45°C is below the hot-holding limit.'],
['Which range is called the temperature danger zone in this Code?','Between 5°C and 60°C','Below minus 18°C','Above 100°C','Limit food time between cold and hot holding.'],
['What checks food temperature accurately?','A suitable calibrated thermometer','My hand','The colour of the container','Measure rather than guess.'],
['What freezer temperature is preferred for frozen-food quality?','Minus 18°C or colder','Plus 18°C','Plus 30°C','Follow the frozen-food storage specification.']
]},
{id:'cooking',name:'Cooking and reheating',icon:'🍳',section:'3.2.8; 3.2.13; 3.2.15; 4.2.1',rows:[
['Chicken looks brown outside. How do I check cooking?','Measure its core temperature','Look only at the skin','Smell it only','Appearance alone cannot confirm safe cooking.'],
['Which standard core cooking target does this Code give for raw animal food?','At least 75°C, or an approved equivalent process','35°C with no other checks','50°C with no other checks','Follow the validated cooking process.'],
['Where should the probe measure cooking?','The slowest-heating part, usually the centre','Only the plate','Only the oven door','Check where heating is slowest.'],
['I used a probe in raw food. What before checking cooked food?','Clean and disinfect the probe','Wipe it on my apron','Use it without cleaning','Keep the probe from transferring contamination.'],
['Cooking temperature is below the required target. What do I do?','Keep it from service and tell my trainer','Serve it anyway','Change the written number','Do not serve food before the required process is met.'],
['What target applies to reheating chilled cooked food for hot holding?','Above 75°C within one hour','Warm to 30°C slowly','Hold at 45°C all morning','This target is for hot holding, not every immediate-service process.'],
['Can reheating fix every food that was stored unsafely?','No. Some toxins can remain','Yes, always','Yes, if it smells good','Report unsafe storage instead of trying to rescue the food.'],
['Food is reheated in a microwave. What helps with cold spots?','Stir or rotate and check more than one place','Check only the hottest edge','Skip the workplace standing time','Follow the microwave procedure and check for uneven heating.']
]},
{id:'cooling',name:'Cooling and thawing',icon:'🧊',section:'3.2.7; 3.2.11; 3.2.12',rows:[
['Where can I thaw meat under the workplace procedure?','In controlled refrigerated storage','On a warm counter all day','Beside an open rubbish bin','Use an approved thawing method.'],
['Does freezing kill all harmful germs?','No','Yes, always','Only if the freezer door is open','Frozen food still needs safe handling.'],
['I need to cool a large pot of cooked food. What helps?','Use smaller shallow portions as instructed','Leave a deep pot out overnight','Cover with a dirty cloth','Smaller portions release heat faster.'],
['What is the first cooling-stage limit in this Code?','60°C to 20°C or below within two hours','60°C to 20°C within twelve hours','Keep it warm overnight','Use the workplace cooling procedure and record times.'],
['What is the total two-stage cooling allowance in this Code?','Six hours to reach 5°C or below','Twenty-four hours','There is no time limit','The stages allow two hours, then four more hours.'],
['The cooling time limit was missed. What do I do?','Tell my supervisor and isolate the food','Invent a new starting time','Serve it because it is now cold','A later cold reading does not undo unsafe cooling.'],
['Food prepared at room temperature will be stored chilled. What limit does this Code give?','Reach 5°C or below within four hours','Leave it out all day','Only cool it next morning','Follow the room-temperature preparation cooling procedure.'],
['I am unsure whether meat has fully thawed. What do I do?','Ask my trainer before cooking','Guess and use the usual process','Leave it in the sun','Check thawing and the cooking procedure.']
]},
{id:'receiving',name:'Deliveries and storage',icon:'📦',section:'3.2.2; 3.2.3; 3.6.4; 8.1; 8.2',rows:[
['A delivery has torn food packaging. What do I do?','Set it aside and tell the person receiving','Accept it without inspection','Hide the torn side','Incoming food needs intact suitable packaging.'],
['A food pack is past its expiry date. What do I do?','Do not use it; tell my supervisor','Change the date','Use it if it smells normal','Do not ignore expired food.'],
['Chilled delivery arrives warm. What should happen?','Check temperature and report before acceptance','Put it straight on a plate','Guess it will be fine','Follow the receiving temperature checks.'],
['After checking a chilled delivery, what next?','Move it promptly to chilled storage','Leave it by the entrance','Put it in the warm dry store','Keep the cold chain working.'],
['Which stock should be used first when otherwise suitable?','The stock with the earliest expiry','The newest expiry every time','The pack with no readable date','Use date-based stock rotation.'],
['I move food out of its original pack. What do I keep?','The required identity and date information','No information','A made-up expiry date','Keep food identifiable and traceable.'],
['Where should food be stored?','On suitable clean storage shelves','Directly on a dirty floor','Beside leaking chemicals','Protect stored food from contamination.'],
['I cannot read a food label. What do I do?','Ask my supervisor to check it','Guess the ingredients and date','Remove the label','Ask before using unclear food.']
]},
{id:'cleaning',name:'Cleaning and chemicals',icon:'🧽',section:'4.2; 4.5; 3.4.2',rows:[
['A worktop has food scraps on it. What comes first?','Remove dirt and clean the surface','Disinfect over the scraps','Prepare salad on the scraps','Cleaning comes before disinfection.'],
['What is disinfection for?','Reducing harmful microbes','Only moving crumbs','Adding flavour','A visibly tidy surface still needs the correct hygiene process.'],
['How much disinfectant should I use?','The labelled amount and workplace instructions','Any amount I feel like','Always the whole bottle','Follow the approved product instructions.'],
['Where should cleaning chemicals be stored?','In the designated area away from food','On the flour shelf','Inside food containers','Separate chemicals from food and utensils.'],
['An unlabelled bottle is in the kitchen. What do I do?','Tell my supervisor; do not guess its contents','Taste it','Pour it into the soup','Only use correctly identified products.'],
['Can I store detergent in a drinks bottle?','No. Use a labelled non-food container','Yes, if it is convenient','Yes, beside bottled water','Prevent chemicals being mistaken for drinks.'],
['A chopping board has deep cracks. What do I do?','Report it and use suitable equipment','Hide cracks with food','Keep using it without checking','Damaged surfaces can be hard to clean.'],
['May I mix cleaning products on my own?','No. Follow approved instructions','Yes, to make them stronger','Yes, when nobody is looking','Use chemicals only as instructed.']
]},
{id:'pests',name:'Pests and waste',icon:'🗑️',section:'4.3; 4.4; 2.14',rows:[
['I see a cockroach near food. What do I do?','Tell my supervisor and protect food','Ignore it','Put it in the bin with bare hands','Report pests promptly.'],
['I see mouse droppings in a store. What do I do?','Stop using affected items and report it','Brush them onto food','Ignore them','Droppings can show pest activity.'],
['Food waste has built up beside a bin. What next?','Report and remove it using the safe procedure','Leave it for pests','Push it under equipment','Waste and spills attract pests.'],
['A food-area bin is overflowing. What do I do?','Arrange safe emptying and cleaning','Keep adding waste','Place clean plates on it','Prevent waste building up.'],
['A pest-control spray is needed. Who should deal with it?','The authorised pest-control service through my supervisor','Me spraying around open food','Any customer','Do not improvise pesticide use.'],
['A door screen is torn. What do I do?','Report it for repair','Leave it open wider','Cover the hole with food packs','Keep pest entry points controlled.'],
['Which helps prevent pests?','Clean areas and protected food','Open waste beside food','Food scraps left overnight','Remove food sources and protect storage.'],
['I finished handling waste. What before serving?','Wash my hands','Touch ready food immediately','Wipe hands on the bin lid','Waste handling must be separated from clean food work.']
]},
{id:'allergens',name:'Food allergies',icon:'🥜',section:'3.4.3',rows:[
['A customer says they have a peanut allergy. What do I do?','Tell the trained supervisor and follow the allergy procedure','Guess the meal is safe','Remove visible nuts only','Check ingredients and cross-contact controls.'],
['I do not know whether a sauce contains milk. What do I say?','I will ask the trained person to check','It is definitely milk-free','All sauces are safe','Never guess allergen information.'],
['Which ingredient can be a food allergen?','Milk','A clean empty plate','A paper receipt','Milk ingredients need allergen checking.'],
['Can a tiny trace of an allergen matter?','Yes','No, never','Only if I can see it','Sensitive customers can react to small traces.'],
['A knife has peanut spread on it. Can it prepare a peanut-free order?','No. Follow the separate-equipment procedure','Yes, without cleaning','Yes, if I hide the spread','Prevent allergen transfer from equipment.'],
['I pick nuts off a finished meal. Is it now safe for a nut-allergic customer?','No. Do not claim it is safe','Yes, always','Yes, if I pick slowly','Removing visible nuts does not remove all allergen traces.'],
['An ingredient brand changes. What should happen?','Check its allergen label again','Assume it is identical','Throw the label away','Recipes and ingredients need checking when they change.'],
['Where do I check what allergens are in a dish?','The verified ingredient information and trained person','The colour of the dish','My memory only','Use checked information, not guesses.']
]},
{id:'service',name:'Safe service and reporting',icon:'🗣️',section:'3.4.1; 3.4.2; 3.6.2; 8.5; 8.8; 8.9; 8.10',rows:[
['How do I pick up ready-to-eat bread?','With clean suitable tongs','With dirty bare hands','With the bin scoop','Use clean serving utensils.'],
['A customer returns a partly eaten meal. What do I do?','Keep it out of food for other customers','Serve it to someone else','Mix it into fresh food','Returned food must not be re-served.'],
['A tasting spoon went into my mouth. What next?','Use a fresh clean utensil for another taste','Put it straight back in the pot','Share it with a colleague','Do not transfer germs from your mouth to food.'],
['Glass breaks beside open food. What do I do?','Stop, protect the area and tell my supervisor','Pick out pieces and serve the food','Sweep glass into the food area','Treat food near broken glass as potentially contaminated.'],
['A customer reports food made them ill. What do I do?','Tell the person in charge promptly','Ignore the complaint','Argue and hide the report','Follow the complaint-reporting procedure.'],
['The power fails. What should I do with the fridge?','Keep the door closed and tell my supervisor','Open the door repeatedly','Decide all food is safe without checks','Follow the power-outage and temperature procedure.'],
['My supervisor says a product is recalled. What do I do?','Separate it and follow recall instructions','Continue serving it','Remove its label','Recalled food must be kept from use.'],
['I do not know if food is safe. What do I do?','Stop and ask my supervisor','Taste it to decide','Serve it to avoid waste','Ask before using food you are unsure about.']
]}
];
const QUESTION_BANK=QUESTION_TOPICS.flatMap(topic=>topic.rows.map((r,i)=>({id:topic.id+'-'+String(i+1).padStart(2,'0'),topic:topic.id,icon:topic.icon,question:r[0],choices:[r[1],r[2],r[3]],answer:0,explanation:r[4],sourceSection:topic.section,sourceUrl:BANK_INFO.source,kind:'original-practice'})));
