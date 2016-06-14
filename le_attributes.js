/************* History ***********************
 * LiveEngage 2.0 Engagement Attributes
 *  The following attributes can be used, depending on specific content: attributes can be used to target and/or report on visitor behavior
 *  Note: This code snippet is an example - the values here are provided for illustrative purposes only.
 *--------------------------------------------
 * More information can be found at:
 *   https://liveengage.liveperson.net/a/new/?connectionOpenArticle=how-to-embed
 *   https://liveengage.liveperson.net/a/new/?connectionOpenArticle=sections
 *--------------------------------------------
 * 08-04-2016 Paul Molensky: initial version
 * dd-mm-yyyy <name>: <short description>
 *********************************************/

 
lpTag.sdes = lpTag.sdes||[];
var _example = _example || [];
var _section = _section || [];
// ##### eCommerce info #####
// * eCommerce information. These attributes allow you to track the commerce interests and activity of your visitors.

// ***** Cart update 
// * Use the Cart Update attributes to get the status of the visitor’s shopping cart - the products within the cart, and its total monetary value.
_example.push(
   {
        "type": "cart",  //MANDATORY
        "total": 11.7,  //TOTAL VALUE OF THE CART AFTER DISCOUNT
        "numItems": 6,  //NUMBER OF ITEMS IN CART
        "products": [{
            "product": {
            "name": "prod1",  //PRODUCT NAME
            "category": "category",  //PRODUCT CATEGORY NAME
            "sku": "sku",  //PRODUCT SKU OR UNIQUE IDENTIFIER
            "price": 7.8  //SINGLE PRODUCT PRICE
            }, "quantity": 1  //NUMBER OF PRODUCTS
        }]
   }
);

// ***** Transaction 
// * Transaction, purchase/deposit details, including the products themselves and their details.
_example.push(
   {
        "type": "purchase",  //MANDATORY
        "total": 11.7,  //TOTAL VALUE OF THE TRANSACTION AFTER DISCOUNT
        "orderId": "DRV1534XC",  //UNIQUE ORDER ID OR RECEIPT ID
        "cart":{
            "products": [{
                 "product": {
                      "name": "antivirus pro plan",  //PRODUCT NAME
                      "category": "software",  //PRODUCT CATEGORY NAME
                      "sku": "xyz001",  //PRODUCT SKU OR UNIQUE IDENTIFIER
                      "price": 7.8  //SINGLE PRODUCT PRICE
                 },
            "quantity": 3  //QUANTITY OF THIS PRODUCT
            }]
        }
   }
);

// ***** Viewed product 
// * Use product viewed attributes to know more about which product categories interest your visitors.
_example.push(
   {
        "type": "prodView",  //MANDATORY
        "products": [{  //ARRAY OF PRODUCTS
            "product": {
                   "name": "red high heel shoe",  //PRODUCT NAME
                   "category": "women shoes",  //PRODUCT CATEGORY NAME
                   "sku": "xyz567",  //PRODUCT SKU OR UNIQUE IDENTIFIER
                   "price": 77.8  //SINGLE PRODUCT PRICE
            }
        }]
   }
);



// ##### Visitor info #####
// * Retrieve specific details about your website visitors, for example: the channel they arrive from and the affiliate they are associated with.

// ***** Customer info 
// * Allows you to collect data about your registered visitors: the customer type, e.g. VIP or Platinum, and their life-cycle status, e.g. upgraded account or inactive.
_example.push(
   {
        "type": "ctmrinfo",  //MANDATORY
            "info": {
            "cstatus": "cancelled",  //CUSTOMER LIFECYCLE STATUS. FROM PRE-DEFINED LIST
            "ctype": "vip",  //CUSTOMER TYPE OR TIER. FROM PRE-DEFINED LIST
            "customerId": "138766AC",  //UNIQUE CUSTOMER IDENTIFIER
            "balance": -400.99,  //THE CUSTOMER FINANCIAL BALANCE IN DECIMAL VALUE
            "socialId": "11256324780",  //SOCIAL ID OF YOUR CHOICE: FACEBOOK, TWITTER ETC...
            "imei": "3543546543545688",  //UNIQUE DEVICE OR PHONE IDENTIFIER
            "userName": "user000",  //CONSUMER NICKNAME OR USERNAME
            "companySize": 500,  //COMPANY SIZE MEASURED BY NUMBER OF EMPLOYEES
            "accountName": "bank corp",  //THE CUSTOMER'S COMPANY NAME
            "role": "broker",  //CONSUMER ROLE TITLE
            "lastPaymentDate": {
                  "day": 15,  //THE DAY OF THE LAST PAYMENT NUMERIC VALUE
                  "month": 10,  //THE MONTH OF THE LAST PAYMENT NUMERIC VALUE
                  "year": 2014  //THE YEAR OF THE LAST PAYMENT NUMERIC VALUE
            },
            "registrationDate": {
                  "day": 23,  //THE DAY OF THE REGISTRATION NUMERIC VALUE
                  "month": 5,  //THE MONTH OF THE REGISTRATION NUMERIC VALUE
                  "year": 2013  //THE YEAR OF THE REGISTRATION NUMERIC VALUE
            }
        }
   }
);

// ***** Marketing source 
// * Get more details about the source of your visitors, the campaign that drove them to your website, and the affiliate they are associated with.
_example.push(
   {
        "type": "mrktInfo",  //MANDATORY
            "info": {
            "channel": "1",  //ORIGINATING CHANNEL ENUM:
             // 0-Direct, 1-Search, 2-Social, 3-Email, 4-Referral, 5-Paid Search, 6-Display
            "affiliate": "Yahoo",  //AFFILIATE NAME
            "campaignId": "US coupon campaign"  //EXTERNAL ORIGINATING CAMPAIGN 
        }
   }
);

// ***** Personal info 
// * Allows you to collect personal information about visitors. You can pass login information from cookies or from questions you ask them in your forms.
_example.push(
   {
        "type": "personal",  //MANDATORY
            "personal": {
            "firstname": "John",  // FIRST NAME
            "lastname": "Doe",  // SURNAME
            "age": {
               "age": 34,  // AGE AS INTEGER
               "year": 1980,  // BIRTH YEAR
               "month": 4,  // BIRTH MONTH
               "day": 15  // BIRTH DAY
           },
            "contacts": [{
               "email": "myname@example.com",  // EMAIL
               "phone": "+1 212-788-8877"  // PHONE NUMBER
           }],
            "gender": "MALE",  // MALE, FEMALE, OTHER
            "company": "company"  // VISITOR COMPANY NAME
        }
   }
);


// ##### Visitor Journey #####
// * Collect details about key actions that visitors take along their journey, and customize their experience accordingly. This includes the leads they generated, errors they experience, and more.

// ***** Lead 
// * Tracking lead information will help you understand what your visitors are interested in and where they are in your funnel. Tracking the value of the lead will appear in your revenue reports, in order for you to measure the monetary value of your campaigns.
_example.push(
   {
        "type": "lead",  //MANDATORY
            "lead": {
            "topic": "luxury car test drive 2015",  //TOPIC OR NAME OF A SUBMITTED LEAD
            "value": 22.22,  //EVALUATED VALUE OF THE LEAD
            "leadId": "xyz123"  //LEAD IDENTIFIER OR TICKET ID
        }
   }
);

// ***** Service activity 
// * Measuring service activities and success can be achieved by using this Engagement attribute. The data about ordering a checkbook, or software usage can be collected using the topic and status properties.
_example.push(
   {
        "type": "service",  //MANDATORY
        "service": {
           "topic": "order checkbook",  // SERVICE ACTIVITY TOPIC OR NAME
           "status": 0,  // STATUS ENUM
            // 0-Complete, 1-In Progress, 2-Approved, 3-cancelled, 4-Not Approved, 
            // 5-Reviewed, 6-Missing Details, 7-Closed, 8-Removed, 9-Assigned,  
            // 10-Waiting for Customer Response, 11-Waiting for Response, 12-Pending, 13-Resolved  
           "category": "finance",  // SERVICE CATEGORY NAME 
           "serviceId": "service12"  // SERVICE UNIQUE IDENTIFIER OR TICKET ID
        }
   }
);

// ***** Visitor error 
// * Getting the information about errors that visitors experience when they browse the site and fill out forms.
_example.push(
   {
        "type": "error",  //MANDATORY
        "error": {
           "message": "Expiration date missing",  // THE ERROR MESSAGE
           "code": "er100004"  // THE ERROR CODE 
        }
   }
);

// ***** Section 
// * Section Engagement Attributes allow you to describe specific webpages by embedding code on your webpage. Use sections to determine the appropriate Location for engaging with visitors, or to display where those visitors are browsing.
_section = [  //SET A LIST OF YOUR SITE SECTIONS
        "electronics",  //CAN BE A SECTION OR A SUB-SECTION
        "user agreement faqs"
];