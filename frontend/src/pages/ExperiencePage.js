import React from "react";
import { Link } from "react-router-dom";

function ExperiencePage() {
  return (
    <>
      <article>
        <h2>Education</h2>
        {/* University logo images */}
        <table className="LogoTable">
          <thead>
            <tr>
              <th style={{ width: "60%" }}></th>
              <th style={{ width: "35%" }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <dl>
                  <dt>
                    <strong>
                      <u>Google Machine Learning Crash Course</u>
                    </strong>
                  </dt>
                  <dd>In Progress</dd>
                </dl>
              </td>
              <td
                rowSpan={"2"}
                style={{ textAlign: "left", verticalAlign: "middle" }}
              >
                <img
                  id="OSULogo"
                  src="../images/OSULogo.png"
                  alt="OSU Logo"
                  style={{ width: "60%", height: "auto" }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <dl>
                  <dt>
                    <strong>
                      <u>Bachelor of Science, Computer Science</u>
                    </strong>
                  </dt>
                  <dd>Fall 2022 - Summer 2024</dd>
                  <dd>Oregon State University, Corvallis, OR</dd>
                  <dd>
                    <Link
                      to="https://www.credly.com/badges/79d79d9d-3728-4a84-b251-bdc7bebaf38c/public_url"
                      className="experience"
                      target="_blank"
                    >
                      Programming Fundamentals Badge
                    </Link>
                  </dd>
                  <dd>GPA: 3.74</dd>
                </dl>
              </td>
            </tr>
            <tr>
              <td>
                <dl>
                  <dt>
                    <strong>
                      <u>Bachelor of Arts, Liberal Studies</u>
                    </strong>
                  </dt>
                  <dd>Fall 2015 - Winter 2017</dd>
                  <dd>Cal State East Bay, Hayward, CA</dd>
                  <dd>Relevant Coursework: Math Minor</dd>
                </dl>
              </td>
              <td style={{ textAlign: "left", verticalAlign: "middle" }}>
                <img
                  id="EBLogo"
                  src="../images/EastBayLogo.png"
                  alt="East Bay Logo"
                  style={{ width: "60%", height: "auto" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TechnicalProficienciesTable">
          <caption>
            <strong>Technical Proficiencies</strong>
          </caption>
          <tr>
            <td>
              <strong>Language Fundamentals</strong>
            </td>
            <td>
              <li>Proficient in Python, Data Structures, and Algorithms</li>
            </td>
            <td>
              <li>Working knowledge in C++, Raku, Racket, and Ruby</li>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Web Development</strong>
            </td>
            <td>
              <li>JavaScript, MongoDB, Express, React, Node.js</li>
            </td>
            <td>
              <li>SQL and NoSQL</li>
            </td>
          </tr>
          <tr>
            <td>
              <strong>OS & Parallelism</strong>
            </td>
            <td>
              <li>*nix Systems, Processes, Concurrency, Threading</li>
            </td>
            <td>
              <li>OpenMP, CUDA, OpenCL, MPI</li>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Software Engineering</strong>
            </td>
            <td>
              <li>Agile, Contiguous Integration, SDLC</li>
            </td>
            <td>
              <li>GitHub VCS, YML Config, Testing</li>
            </td>
          </tr>
        </table>
        <p></p>
        <h2>Work Experience</h2>
        <dl>
          <dt>
            <strong>
              <u>Hayward Unified School District - Substititute Teacher</u>
            </strong>
          </dt>
          <dt>February 2024 - Present</dt>
          <dd>
            <li class="experience">
              Integrated comprehensive lesson plans and a challenging curriculum
              on a range of subjects taught by class instructors.
            </li>
            <li class="experience">
              Garnered a safe and inclusive learning environment, conducive to
              diverse learning styles and open class discussions.
            </li>
            <li class="experience">
              Practiced time management with lessons, gained leadership as a
              classroom leader, and cultivated patience; adapted to shifting
              assignments and accommodated diverse personalities with students
              and school staff.
            </li>
            <li class="experience">
              Fulfilled short-term and long-term substitute teaching
              requirements for all subjects; received high positive feedback
              from teachers; adopted yard duty role during recess; excelled at
              engaging student attention in difficult concepts.
            </li>
            <li class="experience">
              Interacted with students, developed team-building activities that
              enhanced student motivation; incorporated digital technology into
              learning instruction.
            </li>
          </dd>
          <p></p>
          <dt>
            <strong>
              <u>Ascend Rehab Services, Inc. - Human Resources Manager</u>
            </strong>
          </dt>
          <dt>February 2021 - February 2024</dt>
          <dd>
            <li class="experience">
              Orchestrate the daily HR processes, involving benefits management,
              PTO, and the employee life cycle; compose offer letters and
              arrange contracts for all staff.
            </li>
            <li class="experience">
              Monitor key employee documents leveraging HRIS reporting;
              collaborate with payroll department to guarantee timely and
              accurate staff payments.
            </li>
            <li class="experience">
              Maintain confidentiality protocol and integrity with private
              documents and sensitive employee information.
            </li>
            <li class="experience">
              Head the team through two open enrollments, expanding company
              staff from ~150 to 200 employees; vetted and implemented new
              vendors for an all-inclusive training platform, benefits broker,
              and an employee assistance program.
            </li>
            <li class="experience">
              Assisted in opening and staffing new clinical locations;
              streamlining onboarding processes; aid with coordinating and
              executing associate relations activities; aid in organizing events
              such as company-wide training events.
            </li>
            <li class="experience">
              Coach to Managers to improve leadership capabilities in the
              organization and promote a high performing work culture; consult
              management on optimal methods to coach team members.
            </li>
            <li class="experience">
              Lead functional and business initiatives around engagement,
              diversity, talent management, training, and change management.
            </li>
          </dd>
          <p></p>
          <dt>
            <strong>
              <u>Target Corp. - Executive Team Leader, Human Resources</u>
            </strong>
          </dt>
          <dt>July 2019 - November 2020</dt>
          <dd>
            <li class="experience">
              Supervised and handled all HR operations, completed staffing,
              conducted training, organized schedules, and maintained an
              accountable and high-performance culture for a team of 200+
              employees.
            </li>
            <li class="experience">
              Cultivated a culture that emphasized development, compliance, and
              talent management with strong partnerships between other
              executives in a deadline-driven environment; led in the district
              in company-assessed HR metrics for training completion, I-9
              compliance, turnover, attendance, etc.
            </li>
            <li class="experience">
              Upheld a consistent level of discretion and organization in
              alignment with company confidentiality policies for sensitive team
              member documents.
            </li>
            <li class="experience">
              Directed the team as a crucial manager-on-duty, with timely issue
              resolution and accommodating to business requirements; advanced
              sales and repeated business with outstanding customer service.
            </li>
            <li class="experience">
              Identified issues and utilized independent judgment in resolving
              issues by interpreting policies accurately and weighing
              alternative approaches; counseled employees on performance to
              boost efficiency.
            </li>
            <li class="experience">
              Crafted strategies and coached managers in resolving complex
              performance and misconduct issues; communicated HR policies to
              business leaders, and coordinated with business leaders to drive
              programs.
            </li>
            <li class="experience">
              Led the team through peak pandemic in fast-paced and fluctuating
              environment; organized large food events for the entire team for
              Thanksgiving holiday and surrounding days; staffed an overnight
              crew and led the team through a remodel of major parts of the
              store
            </li>
          </dd>

          <p></p>
        </dl>
      </article>
    </>
  );
}
export default ExperiencePage;
