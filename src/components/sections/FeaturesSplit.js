import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'How can we work together',
    paragraph: 'We provide the infrastructure, expertise, platform and support in the form of data and design standards.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Step 1.
                  </div>
                <h3 className="mt-0 mb-12">
                  Identify your use cases.
                  </h3>
                <p className="m-0">
                 Frequency of the report, data sources and end audience.
                 </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-light-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Step 2.
                  </div>
                <h3 className="mt-0 mb-12">
                  Share your requirement
                  </h3>
                <p className="m-0">
                  We will help to check if module catering to your needs already exists, or what is the closest we have.</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-light-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Step 3.
                  </div>
                <h3 className="mt-0 mb-12">
                  Hiring Resources
                  </h3>
                <p className="m-0">
                  We connect you to vendors who can provide analysts on contracts.</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-light-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>


            <div className="split-item">
                          <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                            <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                              Step 4.
                              </div>
                            <h3 className="mt-0 mb-12">
                              Launch and maintenance
                              </h3>
                            <p className="m-0">
                              The dashboard can be hosted on our platform; entitlements can be built in the report itself
                                                        </p>
                          </div>
                          <div className={
                            classNames(
                              'split-item-image center-content-mobile reveal-from-bottom',
                              imageFill && 'split-item-image-fill'
                            )}
                            data-reveal-container=".split-item">
                            <Image
                              src={require('./../../assets/images/features-split-image-light-04.png')}
                              alt="Features split 02"
                              width={528}
                              height={396} />
                          </div>
                        </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;