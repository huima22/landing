import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'See what people have to say!'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses} style = {{marginTop: '-42px'}} >

            <div className="tiles-item-new reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                   Right from the initial design work, to creating the operational service dashboard(OSD) in mid-2020,
                   through to the version of the weekly report we published today, team Databox has been a critical partner on this journey,
                    OSD provides us with a snapshot of the CCIB businesses through a few key metrics. The Databox team are the inspiration for the visualization and have navigated the
                    numerous systems to obtain automated feeds and they continue to engage with the CCIB teams to evolve the dashboards capabilities.
                     </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Graeme Peake</span>

                </div>
                       <span className="testimonial-item-link text-xs">
                                    <a href="#0">COO-Trade ASEAN</a>
                                  </span>
              </div>
            </div>

            <div className="tiles-item-new reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Our experience has been nothing short of excellent. We have collaboratively built insightful dashboards to understand the CX themes, trends,
                    volumes and turnaround times across products, geographies and client segments. Every time we have challenged the team, they have pushed their own
                    boundaries to come back with solutions that work. </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Divashree Bhasin</span>


                </div>
                    <span className="testimonial-item-link text-xs">
                                    <a href="#0">Director, Client Strategy & Engagement, CCIB BD</a> </span>


              </div>
            </div>

            <div className="tiles-item-new reveal-from-center" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    When I faced challenges to set up an interim process to aggregate COVID-19 related client credit extension. I reached out to the Databox team. The team was
                     extremely proactive and quickly worked out a solution. Prior to this solution, the data as being maintained in Excel by each business team in the country, and then being manually collated.
                     This was a tedious manual process and also exposed us to operational risk due to high risk of data errors. The entire end to end process was very well managed and was surely
                     something that could not have been achieved without the team''s continued support.</p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Parikshit Yagnik</span>


                </div>

                    <span className="testimonial-item-link text-xs ">
                                    <a href="#0">Head, Process & Governance Credit</a>
                    </span>
              </div>
            </div>


             <div className="tiles-item-new reveal-from-left" data-reveal-delay="200">
                          <div className="tiles-item-inner">
                            <div className="testimonial-item-content">
                              <p className="text-sm mb-0">
                               The client assessment and tail management(CATMAN) platform implemented on Databox provides several core capabilities
                                regarding the analysis and identification of underperforming clients and the workflow management that supports the offboarding of those clients.
                                The team does and outstanding job of supporting the business in these strategic initiatives: through the tools and capability made available but also
                                in the way they partner and collaborate to drive value.
                                </p>
                            </div>
                            <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                              <span className="testimonial-item-name text-color-high">Stephen Bastiaan Van Der Hor</span>


                            </div>

                                <span className="testimonial-item-link text-xs ">
                                                <a href="#0">Head of Global Banking Operational Effectiveness CLDM</a>
                                </span>
                          </div>
                        </div>


          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;