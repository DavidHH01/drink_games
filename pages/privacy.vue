<template>
  <Section
    :variant="SectionVariant.PRIMARY"
    :size="SectionSize.LARGE"
    :full-height="true"
    class="relative overflow-hidden"
  >
    <AnimatedBackground />

    <div class="absolute top-0 left-0 m-2">
      <Button
        :variant="ButtonVariant.DANGER"
        :size="ButtonSize.MEDIUM"
        icon="mdiArrowLeft"
        :icon-position="ButtonIconPosition.LEFT"
        @click="() => $router.push('/')"
      >
        Back to Games
      </Button>
    </div>

    <div class="relative z-10 w-ful">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-primary mb-4 animate-fade-in-up">Privacy Policy</h1>
        <p class="text-xl text-secondary mb-2 animate-fade-in-up animation-delay-300">Your privacy matters to us</p>
        <p class="text-lg text-muted animate-fade-in-up animation-delay-300">Last updated: {{ lastUpdated }}</p>
      </div>

      <div class="space-y-8 animate-fade-in-up animation-delay-700">
        <!-- Introduction -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <div class="flex items-start gap-4 mb-4">
              <div
                class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <MdiIcon icon="mdiShieldCheck" class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-800 mb-2">
                  Our Commitment to Your Privacy
                </h2>
                <p class="text-gray-600 leading-relaxed">
                  At Drink Games, we take your privacy seriously. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard
                  your information when you visit our website and use our
                  services.
                </p>
              </div>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p class="text-blue-700 text-sm">
                <strong>Quick Summary:</strong> We collect minimal information,
                don't sell your data, and only use what we need to provide you
                with the best gaming experience.
              </p>
            </div>
          </CardBody>
        </Card>

        <!-- Information We Collect -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2
              class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3"
            >
              <MdiIcon icon="mdiDatabase" class="w-6 h-6 text-green-600" />
              Information We Collect
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Automatically Collected -->
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3
                  class="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"
                >
                  <MdiIcon icon="mdiRobot" class="w-5 h-5 text-orange-600" />
                  Automatically Collected
                </h3>
                <ul class="space-y-2 text-gray-600 text-sm">
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-1">•</span>
                    <span>IP address and location data</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-1">•</span>
                    <span>Device and browser information</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-1">•</span>
                    <span>Usage patterns and game statistics</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-1">•</span>
                    <span>Cookies and similar technologies</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-1">•</span>
                    <span>Referral source and website analytics</span>
                  </li>
                </ul>
              </div>

              <!-- User Provided -->
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3
                  class="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"
                >
                  <MdiIcon icon="mdiAccount" class="w-5 h-5 text-blue-600" />
                  User Provided Information
                </h3>
                <ul class="space-y-2 text-gray-600 text-sm">
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600 mt-1">•</span>
                    <span>Player names (temporary, for games)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600 mt-1">•</span>
                    <span>Contact information (if you reach out)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600 mt-1">•</span>
                    <span>Feedback and suggestions</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600 mt-1">•</span>
                    <span>Game preferences and settings</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600 mt-1">•</span>
                    <span>Any information you voluntarily share</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="mt-6 bg-green-50 border border-green-200 rounded-lg p-4"
            >
              <div class="flex items-start gap-3">
                <MdiIcon
                  icon="mdiCheckCircle"
                  class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                />
                <div>
                  <h4 class="font-semibold text-green-800 mb-1">
                    What We DON'T Collect
                  </h4>
                  <p class="text-green-700 text-sm">
                    We don't collect sensitive personal information like social
                    security numbers, financial data, or detailed personal
                    profiles. Our games are designed to be fun and anonymous.
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- How We Use Information -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2
              class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3"
            >
              <MdiIcon icon="mdiCog" class="w-6 h-6 text-purple-600" />
              How We Use Your Information
            </h2>

            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-purple-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800 mb-1">
                    Provide and Improve Our Services
                  </h3>
                  <p class="text-gray-600 text-sm">
                    We use your information to operate our games, fix bugs, and
                    enhance your gaming experience.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-purple-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800 mb-1">
                    Analytics and Performance
                  </h3>
                  <p class="text-gray-600 text-sm">
                    We analyze usage patterns to understand which games are
                    popular and how to improve them.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800 mb-1">
                    Communication
                  </h3>
                  <p class="text-gray-600 text-sm">
                    If you contact us, we'll use your information to respond to
                    your questions or feedback.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-purple-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800 mb-1">
                    Legal Compliance
                  </h3>
                  <p class="text-gray-600 text-sm">
                    We may use information to comply with legal obligations and
                    protect our rights.
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- Cookies and Tracking -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2
              class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3"
            >
              <MdiIcon icon="mdiCookie" class="w-6 h-6 text-orange-600" />
              Cookies and Tracking Technologies
            </h2>

            <div class="space-y-6">
              <p class="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your
                experience on our website.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  class="bg-orange-50 border border-orange-200 rounded-lg p-4"
                >
                  <h3 class="font-semibold text-orange-800 mb-2">
                    Essential Cookies
                  </h3>
                  <p class="text-orange-700 text-sm">
                    Required for basic website functionality and game
                    operations.
                  </p>
                </div>

                <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 class="font-semibold text-blue-800 mb-2">
                    Analytics Cookies
                  </h3>
                  <p class="text-blue-700 text-sm">
                    Help us understand how visitors use our site to improve
                    performance.
                  </p>
                </div>

                <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 class="font-semibold text-green-800 mb-2">
                    Preference Cookies
                  </h3>
                  <p class="text-green-700 text-sm">
                    Remember your settings and preferences for a better
                    experience.
                  </p>
                </div>
              </div>

              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-800 mb-2">
                  Managing Cookies
                </h4>
                <p class="text-gray-600 text-sm mb-2">
                  You can control cookies through your browser settings.
                  However, disabling cookies may affect some website
                  functionality.
                </p>
                <div class="flex gap-2">
                  <Button
                    :variant="ButtonVariant.INFO"
                    :size="ButtonSize.SMALL"
                    @click="showCookieSettings = true"
                    class="text-xs"
                  >
                    Cookie Settings
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- Data Sharing -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2
              class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3"
            >
              <MdiIcon icon="mdiShareVariant" class="w-6 h-6 text-red-600" />
              Information Sharing and Disclosure
            </h2>

            <div class="space-y-6">
              <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                <div class="flex items-start gap-3">
                  <MdiIcon
                    icon="mdiShieldAlert"
                    class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <h3 class="font-semibold text-red-800 mb-2">
                      We DO NOT Sell Your Data
                    </h3>
                    <p class="text-red-700 text-sm">
                      We never sell, rent, or trade your personal information to
                      third parties for marketing purposes.
                    </p>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h3 class="text-lg font-semibold text-gray-800">
                  We may share information in these limited cases:
                </h3>

                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <MdiIcon
                      icon="mdiCloud"
                      class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h4 class="font-medium text-gray-800">
                        Service Providers
                      </h4>
                      <p class="text-gray-600 text-sm">
                        With trusted third-party services that help us operate
                        our website (hosting, analytics, etc.)
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <MdiIcon
                      icon="mdiGavel"
                      class="w-5 h-5 text-purple-600 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h4 class="font-medium text-gray-800">
                        Legal Requirements
                      </h4>
                      <p class="text-gray-600 text-sm">
                        When required by law or to protect our rights and the
                        safety of our users
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <MdiIcon
                      icon="mdiHandshake"
                      class="w-5 h-5 text-green-600 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h4 class="font-medium text-gray-800">
                        Business Transfers
                      </h4>
                      <p class="text-gray-600 text-sm">
                        In connection with a merger, acquisition, or sale of
                        business assets
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- Data Security -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2
              class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3"
            >
              <MdiIcon icon="mdiSecurity" class="w-6 h-6 text-green-600" />
              Data Security
            </h2>

            <div class="space-y-6">
              <p class="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-3">
                  <h3 class="text-lg font-semibold text-gray-800">
                    Technical Safeguards
                  </h3>
                  <ul class="space-y-2 text-gray-600 text-sm">
                    <li class="flex items-center gap-2">
                      <MdiIcon icon="mdiLock" class="w-4 h-4 text-green-600" />
                      <span>SSL encryption for data transmission</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <MdiIcon
                        icon="mdiServer"
                        class="w-4 h-4 text-green-600"
                      />
                      <span>Secure hosting infrastructure</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <MdiIcon
                        icon="mdiUpdate"
                        class="w-4 h-4 text-green-600"
                      />
                      <span>Regular security updates</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <MdiIcon
                        icon="mdiMonitor"
                        class="w-4 h-4 text-green-600"
                      />
                      <span>Continuous monitoring</span>
                    </li>
                  </ul>
                </div>

                <div class="space-y-3">
                  <h3 class="text-lg font-semibold text-gray-800">
                    Access Controls
                  </h3>
                  <ul class="space-y-2 text-gray-600 text-sm">
                    <li class="flex items-center gap-2">
                      <MdiIcon
                        icon="mdiAccountKey"
                        class="w-4 h-4 text-blue-600"
                      />
                      <span>Limited access to personal data</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <MdiIcon
                        icon="mdiClockAlert"
                        class="w-4 h-4 text-blue-600"
                      />
                      <span>Temporary data storage only</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <MdiIcon icon="mdiDelete" class="w-4 h-4 text-blue-600" />
                      <span>Automatic data deletion</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <MdiIcon icon="mdiEye" class="w-4 h-4 text-blue-600" />
                      <span>Audit logs and monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div class="flex items-start gap-3">
                  <MdiIcon
                    icon="mdiAlert"
                    class="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <h4 class="font-semibold text-yellow-800 mb-1">
                      Important Note
                    </h4>
                    <p class="text-yellow-700 text-sm">
                      While we strive to protect your information, no method of
                      transmission over the internet is 100% secure. We cannot
                      guarantee absolute security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- Your Rights -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2
              class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3"
            >
              <MdiIcon icon="mdiAccountCheck" class="w-6 h-6 text-indigo-600" />
              Your Privacy Rights
            </h2>

            <div class="space-y-6">
              <p class="text-gray-600 leading-relaxed">
                You have certain rights regarding your personal information.
                Here's what you can do:
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <div
                      class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <MdiIcon icon="mdiEye" class="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-800">Access</h3>
                      <p class="text-gray-600 text-sm">
                        Request a copy of the personal information we have about
                        you
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <div
                      class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <MdiIcon
                        icon="mdiPencil"
                        class="w-4 h-4 text-indigo-600"
                      />
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-800">Correct</h3>
                      <p class="text-gray-600 text-sm">
                        Request correction of any inaccurate information
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <div
                      class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <MdiIcon
                        icon="mdiDelete"
                        class="w-4 h-4 text-indigo-600"
                      />
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-800">Delete</h3>
                      <p class="text-gray-600 text-sm">
                        Request deletion of your personal information
                      </p>
                    </div>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <div
                      class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <MdiIcon icon="mdiStop" class="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-800">Object</h3>
                      <p class="text-gray-600 text-sm">
                        Object to certain types of processing of your
                        information
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <div
                      class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <MdiIcon
                        icon="mdiExport"
                        class="w-4 h-4 text-indigo-600"
                      />
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-800">Portability</h3>
                      <p class="text-gray-600 text-sm">
                        Request transfer of your data to another service
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <div
                      class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <MdiIcon
                        icon="mdiEmailOff"
                        class="w-4 h-4 text-indigo-600"
                      />
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-800">Opt-out</h3>
                      <p class="text-gray-600 text-sm">
                        Opt-out of marketing communications (if any)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- Children's Privacy -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2
              class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3"
            >
              <MdiIcon icon="mdiShieldAccount" class="w-6 h-6 text-red-600" />
              Children's Privacy
            </h2>

            <div class="bg-red-50 border border-red-200 rounded-lg p-6">
              <div class="flex items-start gap-4">
                <MdiIcon
                  icon="mdiAlert"
                  class="w-8 h-8 text-red-600 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 class="text-lg font-semibold text-red-800 mb-3">
                    Age Restriction - 21+ Only
                  </h3>
                  <p class="text-red-700 leading-relaxed mb-4">
                    Our services are intended for adults aged 21 and older (or
                    the legal drinking age in your jurisdiction). We do not
                    knowingly collect personal information from individuals
                    under this age.
                  </p>
                  <p class="text-red-700 leading-relaxed">
                    If we become aware that we have collected personal
                    information from someone under the required age, we will
                    take steps to delete that information promptly.
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- Changes to Policy -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2
              class="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3"
            >
              <MdiIcon icon="mdiUpdate" class="w-6 h-6 text-blue-600" />
              Changes to This Privacy Policy
            </h2>

            <div class="space-y-4">
              <p class="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or
                other factors.
              </p>

              <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 class="font-semibold text-blue-800 mb-2">
                  When we update our policy:
                </h3>
                <ul class="space-y-1 text-blue-700 text-sm">
                  <li>• We'll update the "Last updated" date at the top</li>
                  <li>
                    • For significant changes, we'll provide prominent notice
                  </li>
                  <li>• We encourage you to review this policy periodically</li>
                  <li>• Continued use constitutes acceptance of changes</li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- Summary Card -->
        <Card
          :size="CardSize.FULL"
          class="bg-gradient-to-r from-green-500 to-blue-500 text-white"
        >
          <CardBody :padding="CardSize.LARGE" class="text-center">
            <h2 class="text-2xl font-bold mb-4">Privacy Summary</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <MdiIcon
                  icon="mdiShieldCheck"
                  class="w-8 h-8 mx-auto mb-2 text-white"
                />
                <h3 class="font-semibold mb-1">Data Protection</h3>
                <p class="text-sm text-white/90">
                  We protect your information with industry-standard security
                </p>
              </div>
              <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <MdiIcon
                  icon="mdiAccountOff"
                  class="w-8 h-8 mx-auto mb-2 text-white"
                />
                <h3 class="font-semibold mb-1">No Data Sales</h3>
                <p class="text-sm text-white/90">
                  We never sell your personal information to third parties
                </p>
              </div>
              <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <MdiIcon
                  icon="mdiAccountKey"
                  class="w-8 h-8 mx-auto mb-2 text-white"
                />
                <h3 class="font-semibold mb-1">Your Control</h3>
                <p class="text-sm text-white/90">
                  You have full control over your personal information
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>

    <!-- Cookie Settings Modal -->
    <Modal
      v-model="showCookieSettings"
      :variant="ModalVariant.GAMING"
      :size="ModalSize.MEDIUM"
      title="Cookie Settings"
      subtitle="Manage your cookie preferences"
      icon="mdiCookie"
    >
      <div class="space-y-4">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-800 mb-2">Cookie Categories</h4>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <span class="font-medium text-gray-700">Essential Cookies</span>
                <p class="text-sm text-gray-600">
                  Required for basic functionality
                </p>
              </div>
              <div class="text-gray-500 text-sm">Always On</div>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <span class="font-medium text-gray-700">Analytics Cookies</span>
                <p class="text-sm text-gray-600">Help us improve our service</p>
              </div>
              <input
                type="checkbox"
                v-model="analyticsEnabled"
                class="rounded"
              />
            </div>
            <div class="flex items-center justify-between">
              <div>
                <span class="font-medium text-gray-700"
                  >Preference Cookies</span
                >
                <p class="text-sm text-gray-600">Remember your settings</p>
              </div>
              <input
                type="checkbox"
                v-model="preferencesEnabled"
                class="rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <Button
          :variant="ButtonVariant.DANGER"
          @click="showCookieSettings = false"
        >
          Cancel
        </Button>
        <Button :variant="ButtonVariant.SUCCESS" @click="saveCookieSettings">
          Save Settings
        </Button>
      </template>
    </Modal>
  </Section>
</template>

<script setup lang="ts">
// Meta tags para SEO
useHead({
  title: "Privacy Policy - Drink Games | Your Privacy Matters",
  meta: [
    {
      name: "description",
      content:
        "Read our comprehensive privacy policy. Learn how Drink Games protects your personal information and respects your privacy rights.",
    },
    {
      name: "keywords",
      content:
        "privacy policy, data protection, user privacy, drinking games privacy, personal information protection",
    },
    { property: "og:title", content: "Privacy Policy - Drink Games" },
    {
      property: "og:description",
      content:
        "Comprehensive privacy policy explaining how we protect your personal information.",
    },
    { name: "robots", content: "index, follow" },
  ],
});

// Estado reactivo
const lastUpdated = ref("June 2025");
const showCookieSettings = ref(false);
const analyticsEnabled = ref(true);
const preferencesEnabled = ref(true);

// Funciones
const saveCookieSettings = () => {
  // Aquí guardarías las preferencias de cookies
  console.log("Saving cookie settings:", {
    analytics: analyticsEnabled.value,
    preferences: preferencesEnabled.value,
  });
  showCookieSettings.value = false;
};
</script>

<style scoped>
/* Estilos para mejorar la legibilidad */
.text-gray-600 {
  line-height: 1.7;
}

.bg-white {
  background-color: white !important;
}

/* Espaciado consistente */
.space-y-8 > * + * {
  margin-top: 2rem;
}

/* Mejoras para las cards de información */
.bg-blue-50,
.bg-green-50,
.bg-red-50,
.bg-yellow-50,
.bg-orange-50,
.bg-indigo-50 {
  transition: all 0.2s ease;
}

/* Hover effects para elementos interactivos */
.cursor-pointer:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Checkbox styling */
input[type="checkbox"] {
  width: 1.25rem;
  height: 1.25rem;
  accent-color: #3b82f6;
}
.animate-fade-in-up {
  animation: animate-fade-in-up 0.8s ease-out forwards;
}

.animation-delay-300 {
  animation-delay: 0.3s;
  opacity: 0;
}

.animation-delay-500 {
  animation-delay: 0.5s;
  opacity: 0;
}

.animation-delay-700 {
  animation-delay: 0.7s;
  opacity: 0;
}

.animation-delay-1000 {
  animation-delay: 1s;
  opacity: 0;
}

@keyframes animate-fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
