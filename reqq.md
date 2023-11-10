Version 1.0 Approved

Prepared by\
CB.EN.U4CSE20020 \[Gadde Ashok\]\
CB.EN.U4CSE20021 \[G Durga Rao\]\
CB.EN.U4CSE20023 \[PA Gurudev\]\
CB.EN.U4CSE20037 \[Malireddy Dushyanth\]\
CB.EN.U4CSE20068 \[Thatavarthi Harshith\]

Amrita School of Computing

30-04-2023

[]{#_Toc344877432 .anchor}Table of Contents

Table of Contents [ii](#_Toc344877432)

Revision History [ii](#_Toc441230971)

1\. Introduction [1](#introduction)

1.1 Purpose [1](#purpose)

1.2 Document Conventions [1](#document-conventions)

1.3 Intended Audience and Reading Suggestions
[1](#intended-audience-and-reading-suggestions)

1.4 Product Scope [1](#product-scope)

1.5 References [1](#references)

2\. Overall Description [2](#overall-description)

2.1 Product Perspective [2](#product-perspective)

2.2 Product Functions [2](#product-functions)

2.3 User Classes and Characteristics
[2](#user-classes-and-characteristics)

2.4 Operating Environment [2](#operating-environment)

2.5 Design and Implementation Constraints
[2](#design-and-implementation-constraints)

2.6 User Documentation [2](#user-documentation)

2.7 Assumptions and Dependencies [3](#assumptions-and-dependencies)

3\. External Interface Requirements
[3](#external-interface-requirements)

3.1 User Interfaces [3](#user-interfaces)

3.2 Hardware Interfaces [3](#hardware-interfaces)

3.3 Software Interfaces [3](#software-interfaces)

3.4 Communications Interfaces [3](#communications-interfaces)

4\. System Features [4](#system-features)

4.1 System Feature 1 [4](#_Toc441230992)

4.2 System Feature 2 (and so on) [4](#medical-leave-management)

5\. Other Nonfunctional Requirements
[4](#other-nonfunctional-requirements)

5.1 Performance Requirements [4](#performance-requirements)

5.2 Safety Requirements [5](#safety-requirements)

5.3 Security Requirements [5](#security-requirements)

5.4 Software Quality Attributes [5](#software-quality-attributes)

5.5 Business Rules [5](#business-rules)

6\. Other Requirements [5](#other-requirements)

Appendix A: Glossary [5](#_Toc439994696)

Appendix B: Analysis Models [5](#_Toc439994697)

Appendix C: To Be Determined List [6](#_Toc439994698)

[]{#_Toc441230971 .anchor}Revision History

  --------------- ---------- ----------------------------------- -------------
  **Name**        **Date**   **Reason For Changes**              **Version**

                                                                 

                                                                 
  --------------- ---------- ----------------------------------- -------------

# Introduction

## Purpose

## This Software Requirements Specification (SRS) document specifies the software requirements for the Students OD/ML (Ordinary Leave) Management System. This SRS describes the scope of the product, which includes the login, signup, dashboard, leave request, approval, and history functionalities of the system.  {#this-software-requirements-specification-srs-document-specifies-the-software-requirements-for-the-students-odml-ordinary-leave-management-system.-this-srs-describes-the-scope-of-the-product-which-includes-the-login-signup-dashboard-leave-request-approval-and-history-functionalities-of-the-system. .unnumbered}

## Document Conventions

This SRS follows standard conventions for documenting software
requirements. Requirements are presented in a structured format,
including functional and non-functional requirements. Each requirement
statement is assigned its own priority to indicate its importance.
Additionally, any abbreviations or acronyms used in this document will
be defined for clarity.

## Intended Audience and Reading Suggestions

This document is intended for various stakeholders involved in the
development and management of the Students OD/ML Management System. The
audience includes:

Developers: To understand the detailed software requirements and design
the system accordingly.

Project Managers: To gain an overview of the project scope and ensure
its successful completion.

Faculty Members/Administrators: To understand the system\'s
functionalities and how they can manage leave requests effectively.

Students: To familiarize themselves with the features and usage of the
Students OD/ML Management System.

Testers: To identify test cases based on the specified requirements.

Documentation Writers: To gather information for creating user manuals
and system documentation.

To understand the document, it is recommended to start with the overview
sections to gain an understanding of the system\'s purpose and scope.
Readers can then proceed to the sections that are most relevant to their
roles or interests, such as the functional requirements, non-functional
requirements, and system interfaces sections.

## Product Scope

The Students OD/ML Management System is a software solution aimed at
simplifying the leave management process for students. It provides a
comprehensive set of features, including login and signup functionality
for students and faculty members, a user-friendly dashboard interface,
the ability to submit leave requests, leave approval/rejection by
faculty members, and a leave history tracker.

The system\'s primary objective is to streamline the leave management
process, eliminating the need for manual paperwork and improving
communication between students and faculty members. By automating leave
request submission, approval, and tracking, the system aims to enhance
efficiency, reduce errors, and ensure transparency in the leave
management workflow.

The Students OD/ML Management System aligns with the corporate goal of
optimizing administrative processes within educational institutions and
facilitating a smoother experience for both students and faculty
members.

## References

\"Database System Concepts\" by Abraham Silberschatz, Henry F. Korth,
and S. Sudarshan - This textbook covers various aspects of database
systems, including concurrency control mechanisms. It provides a
comprehensive understanding of concurrency control techniques and their
implementation.

\"Transaction Processing: Concepts and Techniques\" by Jim Gray and
Andreas Reuter - This book explores the concepts and techniques involved
in transaction processing systems, including concurrency control. It
delves into the theory and practical aspects of concurrency control
mechanisms in database systems.

\"Concurrency Control and Recovery in Database Systems\" by Philip A.
Bernstein, Vassos Hadzilacos, and Nathan Goodman - This book focuses
specifically on concurrency control and recovery mechanisms in database
systems. It provides in-depth coverage of concurrency control
algorithms, techniques, and protocols.

\"Principles of Distributed Database Systems\" by M. Tamer Özsu and
Patrick Valduriez - This textbook discusses distributed database systems
and covers concurrency control algorithms suitable for distributed
environments. It explores topics such as distributed locking, timestamp
ordering, and optimistic concurrency control.

# Overall Description

## Product Perspective

The Students OD/ML (On-Duty/Leave Management) Management System is a
new, self-contained product developed to streamline the leave management
process for students. It is an independent system and not a replacement
for any existing systems or part of a product family. While it operates
independently, it may have interfaces with other systems such as user
authentication systems or academic databases. A diagram illustrating the
major components and their interconnections can provide a visual
representation of the overall system architecture.

## Product Functions

The Students OD/ML Management System will provide the following major
functions:

User authentication: The system will provide login and signup
functionality for students and faculty members. This ensures secure
access to the system and distinguishes different user roles.

Dashboard management: The system will present a user-friendly interface
where students and faculty members can access relevant information and
perform various actions related to leave management. The dashboard will
provide an overview of leave requests, notifications, and leave history.

Leave request submission: Students will be able to submit leave requests
through the system. They will provide necessary details such as leave
dates and reasons for their request.

Leave approval/rejection: Faculty members or designated administrators
will have the ability to review and approve or reject leave requests
submitted by students. They will have access to the leave details and
can make informed decisions.

Leave history tracking: The system will maintain a record of leave
requests, approvals, rejections, and leave history for each student.
This allows students and faculty members to track their leave patterns
and provides a historical record for reference.

## User Classes and Characteristics

The anticipated user classes for the Students OD/ML Management System
include:

Students: They will use the system to submit leave requests, view their
leave history, and receive updates on the status of their requests.
Students may have different academic programs and levels, and they may
have varying leave privileges based on institutional policies.

Faculty members/Administrators: They will use the system to review and
manage leave requests, approve or reject them, and access relevant
student information. Faculty members may have different roles and
responsibilities within the system, such as course instructors or
academic advisors.

The user classes may vary in terms of technical expertise, privileges,
and responsibilities within the system. The system should be designed to
accommodate users with varying levels of technical proficiency and
provide appropriate security and privilege levels for each user class.

## Operating Environment

The Students OD/ML Management System will operate in the following
environment:

Hardware platform: The system should be compatible with various hardware
platforms, including desktops, laptops, tablets, or smartphones. Users
should be able to access the system using devices with a web browser.

Operating system: The system should be compatible with different
operating systems, including Windows, macOS, Linux, iOS, and Android. It
should be accessible regardless of the user\'s chosen operating system.

Software components: The system will be built using the MERN (MongoDB,
Express.js, React.js, Node.js) stack. MongoDB will serve as the
database, Express.js and Node.js will handle the backend, and React.js
will be used for the frontend.

## Design and Implementation Constraints

The design and implementation of the Students OD/ML Management System
will adhere to the following constraints:

Technology stack: The system will be developed using the MERN stack,
leveraging the capabilities and features provided by these technologies.
This ensures consistency, compatibility, and efficiency throughout the
development process.

Security considerations: The system will implement appropriate security
measures to ensure the confidentiality and integrity of user data. This
includes secure user authentication mechanisms, data encryption, and
access controls to protect sensitive information.

User interface design conventions: The system will follow user interface
design standards and conventions to provide a consistent and intuitive
user experience. This includes using clear navigation, informative
feedback, and responsive design principles to ensure ease of use for the
users.

## User Documentation

The user documentation components delivered with the software may
include:

User manuals: Comprehensive guides explaining the functionalities and
usage of the Students OD/ML Management System. The user manuals will
provide step-by-step instructions and explanations to help users
navigate and utilize the system effectively.

On-line help: Contextual help accessible within the system, providing
guidance on specific tasks and features. Users can access relevant help
content while using the system, offering real-time assistance and
clarification.

Tutorials: Step-by-step tutorials or video guides to assist users in
understanding and utilizing specific features of the system. Tutorials
can provide a more interactive and visual learning experience for users.

The user documentation will follow standard industry conventions, using
clear and concise language to ensure ease of understanding for users. It
will be accessible in PDF format and integrated within the Students
OD/ML Management System, providing convenient access to the
documentation resources.

## Assumptions and Dependencies

Assumptions:

The Students OD/ML Management System assumes that the underlying
technology stack (MERN) will be suitable for the project\'s requirements
and objectives. The system\'s development will leverage the strengths
and capabilities of the MERN stack to deliver a robust and scalable
solution.

It assumes that users will have access to compatible devices with a web
browser and internet connectivity to utilize the system. The system
should be accessible on a variety of devices, allowing users to access
it conveniently from their preferred platforms.

Dependencies:

The project may depend on external libraries, frameworks, or components
that are part of the MERN stack. These dependencies should be compatible
with the system\'s requirements, ensuring smooth integration and
functionality.

The Students OD/ML Management System may rely on secure authentication
mechanisms provided by external systems or services for user login and
authentication. Integration with these authentication systems should be
seamless, ensuring a secure and reliable login process for users.

The successful implementation and deployment of the system may be
influenced by corporate or institutional policies and guidelines, such
as security and data privacy regulations. The system should comply with
relevant policies and ensure the privacy and protection of user data in
accordance with these regulations.

By considering these assumptions and dependencies, the Students OD/ML
Management System can be designed and implemented to meet the needs of
students, faculty members, and administrators, providing efficient leave
management functionality and enhancing the overall student experience.

# External Interface Requirements

## User Interfaces

The user interfaces for the Student Leave Management System should
provide an intuitive and user-friendly experience for students. Here are
the logical characteristics of the interfaces for on-duty leave, medical
leave, and ordinary leave:

dashboard interface (Admin):

![](media/image1.jpeg){width="6.15in" height="2.966666666666667in"}

login interface:

![](media/image2.jpeg){width="6.225in" height="3.025in"}

Apply leave interface:

![](media/image3.jpeg){width="6.95in" height="3.3333333333333335in"}

leave list interface:

![](media/image4.jpeg){width="6.916666666666667in"
height="3.3666666666666667in"}

Innovative dashboard interface (student):

The user can change the mode of the website and also you can observe the
analytical graph showing the analysis of leaves.

![](media/image5.jpeg){width="7.0in" height="3.408333333333333in"}

![](media/image6.jpeg){width="6.666666666666667in" height="3.175in"}

excel sheet (leave list):

![](media/image7.jpeg){width="7.15in" height="1.5916666666666666in"}

forgot password (interface):

![](media/image8.jpeg){width="7.266666666666667in" height="3.5in"}

verify otp (interface):

![](media/image9.jpeg){width="6.708333333333333in"
height="3.216666666666667in"}

Update profile Interface:

![](media/image10.jpeg){width="6.733333333333333in" height="3.275in"}

3.1.1 On-Duty Leave Interface

The interface should allow students to submit on-duty leave requests.

It should include a form with fields for the leave date, reason, and any
additional details.

The interface should provide clear instructions and guidance on filling
out the form.

Students should be able to review and edit their submitted on-duty leave
requests.

Confirmation messages should be displayed upon successful submission.

3.1.2 Medical Leave Interface

The interface should enable students to apply for medical leave.

It should include a form to capture the leave start date, end date,
medical certificate upload, and reason.

Students should receive guidance on providing accurate and necessary
medical information.

The interface should display confirmation messages after the submission
of a medical leave request.

Students should have the ability to view and modify their medical leave
requests.

3.1.3 Ordinary Leave Interface

The ordinary leave interface should allow students to request general
leaves.

It should provide a form for students to specify the leave start date,
end date, reason, and any supporting documents if required.

Clear instructions should be provided for filling out the form
accurately.

Upon successful submission, students should receive confirmation
messages.

The interface should enable students to view and manage their ordinary
leave requests.

## Hardware Interfaces

The Student Leave Management System does not have specific hardware
interfaces. It will be accessed through standard computing devices such
as desktop computers, laptops, tablets, or smartphones, using web
browsers.

## Software Interfaces

The Student Leave Management System will interact with the following
software components:

3.3.1 Student and Faculty Databases

The system will integrate with the existing student and faculty
databases to retrieve student information, such as names, IDs, and
contact details.

3.3.2 Email Notification Service

The system will interface with an email notification service to send
email notifications to students, faculty, and administrators regarding
leave requests, approvals, rejections, and other related information.

## Communications Interfaces

The Student Leave Management System will utilize the following
communications interfaces:

3.4.1 Web Browser Communication

The system will use standard HTTP/HTTPS protocols for communication
between the user interface and the server.

3.4.2 Email Communication

The system will send and receive email notifications using standard
email protocols (e.g., SMTP) for communication with students, faculty,
and administrators.

This provides an example of how the external interface requirements
section can be structured for the specific types of leave in your
project. You can further customize it based on your system\'s specific
needs and interface designs.

# System Features

## On-Duty Leave Management

### Description and Priority

This feature allows students to manage their on-duty leave requests. It
has a medium priority.

### Stimulus/Response Sequences

Student submits an on-duty leave request through the user interface.

System validates the leave request for completeness and accuracy.

System saves the leave request in the database.

System sends a confirmation email to the student regarding the
successful submission.

### Functional Requirements

REQ-1: The system should provide a form for students to enter the
on-duty leave details, including the leave date and reason.

REQ-2: The system should validate the entered leave date to ensure it
falls within the allowable range.

REQ-3: The system should save the submitted on-duty leave request in the
database.

REQ-4: The system should send a confirmation email to the student upon
successful submission.

REQ-5: The system should allow students to view the status of their
on-duty leave requests.

REQ-6: The system should allow students to edit or cancel their pending
on-duty leave requests.

## Medical Leave Management

### Description and Priority

This feature enables students to manage their medical leave requests. It
has a high priority.

### Stimulus/Response Sequences

Student submits a medical leave request with the required details,
including the leave start date, end date, reason, and medical
certificate upload.

System validates the leave request and verifies the medical certificate.

System saves the medical leave request and related information in the
database.

System sends an email notification to the student upon successful
submission.

### Functional Requirements

REQ-1: The system should provide a form for students to enter the
medical leave details, including the leave start date, end date, reason,
and upload option for the medical certificate.

REQ-2: The system should validate the entered leave dates and ensure
they are within the allowable range.

REQ-3: The system should validate and verify the uploaded medical
certificate for authenticity and compliance.

REQ-4: The system should save the medical leave request and associated
information in the database.

REQ-5: The system should send an email notification to the student upon
successful submission.

REQ-6: The system should allow students to view the status and details
of their medical leave requests.

REQ-7: The system should provide an option for students to update or
cancel their pending medical leave requests.

## Ordinary Leave Management

### Description and Priority

This feature enables students to manage their ordinary leave requests.
It has a high priority.

### Stimulus/Response Sequences

Student fills out the ordinary leave request form, specifying the leave
start date, end date, reason, and any supporting documents if required.

System validates the entered leave details and supporting documents.

System saves the ordinary leave request in the database.

System sends an email notification to the student upon successful
submission.

### Functional Requirements

REQ-1: The system should provide a form for students to enter the
ordinary leave details, including the leave start date, end date,
reason, and option to upload supporting documents.

REQ-2: The system should validate the entered leave dates to ensure they
are within the allowed range.

REQ-3: The system should validate and verify any uploaded supporting
documents for completeness and authenticity.

REQ-4: The system should save the ordinary leave request and related
information in the database.

REQ-5: The system should send an email notification to the student upon
successful submission.

REQ-6: The system should allow students to view the status and details
of their ordinary leave requests.

REQ-7: The system should provide an option for students to update or
cancel their pending ordinary leave requests.

## Leave Approval Workflow

### Description and Priority

This feature enables faculty members to review and approve leave
requests submitted by students. It has a high priority.

### Stimulus/Response Sequences

Faculty member logs into the system and accesses the leave approval
dashboard.

Faculty member views the pending leave requests assigned to them.

Faculty member reviews the leave details and supporting documents (if
applicable).

Faculty member approves or rejects the leave request.

System sends an email notification to the student regarding the approval
or rejection.

### Functional Requirements

REQ-1: The system should provide a dashboard for faculty members to view
pending leave requests assigned to them.

REQ-2: The system should display relevant leave details, including the
student\'s information, leave type, dates, and reason.

REQ-3: The system should provide options for faculty members to approve
or reject a leave request.

REQ-4: The system should allow faculty members to add comments or
remarks regarding the leave request.

REQ-5: The system should send an email notification to the student upon
approval or rejection of their leave request.

REQ-6: The system should maintain a log of leave approvals and
rejections for auditing purposes.

# Other Nonfunctional Requirements

## Performance Requirements

The system should have a response time of less than 2 seconds for
submitting leave requests to ensure a smooth user experience.

The system should be able to handle concurrent requests from multiple
users without significant performance degradation.

The system should support a large number of active users (e.g., 1000
simultaneous users) without impacting performance.

## Safety Requirements

The system should ensure the confidentiality of sensitive student
information, such as medical certificates and personal details.

The system should implement appropriate access controls to prevent
unauthorized access to student leave data.

The system should provide data backup and recovery mechanisms to
safeguard against data loss.

## Security Requirements

The system should enforce secure user authentication and authorization
mechanisms to ensure that only authorized users can access and modify
leave information.

The system should encrypt sensitive data, such as medical certificates
and personal information, to protect against unauthorized access.

The system should log and monitor user activities to detect and prevent
any security breaches.

## Software Quality Attributes

Usability: The system should have an intuitive user interface with clear
instructions and error messages to facilitate ease of use for students
and faculty members.

Reliability: The system should have a high level of reliability and be
available for use 24/7, with minimal downtime for maintenance or
upgrades.

Maintainability: The system should be designed and implemented in a
modular and well-documented manner, making it easier for future
maintenance and enhancements.

Scalability: The system should be scalable to accommodate increasing
numbers of students and faculty members as the user base grows.

Testability: The system should be designed to facilitate comprehensive
testing, with well-defined test cases and test data.

## Business Rules

Only registered students and authorized faculty members should be able
to access and interact with the system.

Students should only be allowed to submit leave requests within a
predefined time frame.

Faculty members should have the authority to approve or reject leave
requests based on their assigned roles and responsibilities.

# Other Requirements

[]{#_Toc439994696 .anchor}Functional requirements are the features and
capabilities that the software must possess to perform the required
functions. In the case of a leave management system, some of the
functional requirements might include:

The ability for students to apply for leave, specifying the type of
leave (OD/ML/Ordinary), the reason for the leave, the duration of the
leave, and any supporting documents required.

The ability for faculty members to review and approve or reject leave
applications submitted by students.

The ability to generate reports on leave applications, approved leaves,
and rejected leaves.

Non-functional Requirements:

Non-functional requirements are the qualities that the software should
possess, such as reliability, scalability, security, and usability. Some
of the non-functional requirements for a leave management system might
include:

The system should be user-friendly and easy to navigate, with clear
instructions and intuitive interfaces.

The system should be accessible from any device with an internet
connection, making it easy for students and faculty to use the system
from anywhere.

The system should ensure the security and confidentiality of the data,
protecting personal and sensitive information from unauthorized access
or disclosure.

The system should be reliable and available 24/7 with minimal downtime,
ensuring that students and faculty can access the system when they need
it.

The system should be scalable to accommodate a growing number of users
and leave applications, ensuring that the system can handle increased
usage over time.

Database Requirements:

A leave management system will require a database to store student
information, leave applications, and their status. The database should
be secure and scalable to handle a large amount of data.

Appendix A: Glossary

1.  Student Leave Management System: The software system or application
    designed to manage and track student leaves within an educational
    institution.

2.  OD: On-Duty. It refers to a type of leave taken by students when
    they are required to be present for official or academic duties.

3.  ML: Medical Leave. It signifies a type of leave granted to students
    when they are unable to attend classes due to medical reasons or
    illness.

4.  Ordinary Leave: A general type of leave available to students for
    personal or non-medical reasons, such as family commitments,
    personal emergencies, or special occasions.

5.  Leave Application: The process through which students submit a
    request for leave, providing details like leave type, duration,
    reason, and any supporting documents.

6.  Leave Approval Workflow: The defined steps and procedures that need
    to be followed for leave requests to be reviewed, approved, or
    rejected by the appropriate authorities.

7.  Leave Balance: The remaining or available leave days a student has,
    which is calculated based on the types of leaves granted and
    utilized.

8.  Absence Report: A summary or record of students\' leaves, including
    the type of leave, dates, reasons, and any additional notes.

9.  Leave Administrator: The person or team responsible for managing and
    overseeing the Student Leave Management System, including user
    accounts, leave records, and system maintenance.

10. Update Profile: A module or feature that allows users (students,
    faculty, or administrators) to edit and manage their personal
    information, such as contact details, profile picture, and
    preferences.

11. Department: A section dedicated to managing different academic
    departments within the educational institution, including the
    ability to view department-specific information, add or modify
    department details, and assign faculty members.

12. Faculty: Refers to the section or module where information about
    faculty members is stored and managed, including their profiles,
    contact details, teaching assignments, and leave entitlements.

13. User: In the context of a Student Leave Management System, it
    generally refers to individuals who have access to the system, such
    as students, faculty, and administrative staff.

14. Student: A module or section dedicated to managing student-related
    information, including student profiles, academic details,
    attendance records, and leave history.

15. Leave Type: A section that allows administrators to define and
    manage different types of leaves available to students, such as
    Ordinary Leave, Medical Leave, On-Duty Leave, or any specific leave
    categories relevant to the institution.

16. Notifications: A feature that provides timely updates and alerts to
    users regarding leave approvals, pending tasks, system
    announcements, or any other important information.

[]{#_Toc439994697 .anchor}

Appendix B: Analysis Models

UseCase Diagram:

![](media/image11.jpeg){width="6.666666666666667in" height="6.7in"}

Activity Diagram:

![](media/image12.jpeg){width="7.341666666666667in"
height="7.583333333333333in"}

Time Sequence Diagram:

![](media/image13.jpeg){width="7.183333333333334in" height="8.45in"}

Component Diagram:

![](media/image14.jpeg){width="5.825in" height="3.7in"}

[]{#_Toc439994698 .anchor}Appendix C: To Be Determined List

1.  Hardware Requirements - TBD: Determine the minimum system
    requirements for running the Student Leave Management System,
    including processor, memory, and storage specifications.

2.  Software Requirements - TBD: Specify the supported operating systems
    and web browsers for accessing the system.

3.  Data Formats or Structures - TBD: Define the data formats for
    storing student information, leave records, and any other relevant
    data entities within the system.

4.  User Interface Design Elements - TBD: Finalize the layout, color
    scheme, typography, and overall visual design of the user interface
    for the Student Leave Management System.

5.  Third-Party Service Integrations - TBD: Identify and determine the
    integration requirements with external services or platforms, such
    as email notification services, authentication systems, or student
    information systems.

6.  Specific Functional Requirements - TBD: Clearly define and document
    any specific functional requirements that are currently under
    discussion or require further analysis. For example, the process for
    leave cancellation, leave extension, or leave approval hierarchy.

7.  Performance Requirements - TBD: Determine the expected system
    response times for common operations, such as loading leave lists,
    submitting leave requests, or generating reports.

Jenkins Report:

![](media/image15.jpeg){width="6.958333333333333in"
height="3.466666666666667in"}

Sonarqube Report:![](media/image16.jpeg){width="7.025in"
height="3.5833333333333335in"}
