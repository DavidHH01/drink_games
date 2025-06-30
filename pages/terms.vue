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

    <div class="relative z-10 w-full">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-primary mb-4 animate-fade-in-up">
          Terms of Service
        </h1>
        <p class="text-xl text-secondary animate-fade-in-up animation-delay-300">
          Last updated: {{ lastUpdated }}
        </p>
      </div>

      <div class="space-y-8 animate-fade-in-up animation-delay-700">
        <!-- Introduction -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">1. Agreement to Terms</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              By accessing and using Drink Games ("we," "us," or "our") website and services, 
              you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p class="text-gray-600 leading-relaxed">
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </CardBody>
        </Card>

        <!-- Use License -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">2. Use License</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials on 
              Drink Games' website for personal, non-commercial transitory viewing only.
            </p>
            <p class="text-gray-600 leading-relaxed mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </CardBody>
        </Card>

        <!-- Age Requirements -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">3. Age Requirements</h2>
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <div class="flex items-start gap-3">
                <MdiIcon icon="mdiAlert" class="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold text-yellow-800 mb-2">Important Age Restriction</h3>
                  <p class="text-yellow-700">
                    You must be at least 21 years old (or the legal drinking age in your jurisdiction) 
                    to use our drinking game services.
                  </p>
                </div>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed">
              By using our services, you confirm that you meet the age requirements and will 
              use our games responsibly and in accordance with local laws.
            </p>
          </CardBody>
        </Card>

        <!-- Responsible Gaming -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">4. Responsible Gaming Policy</h2>
            <div class="space-y-4">
              <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 class="font-semibold text-red-800 mb-2">Alcohol Consumption</h3>
                <p class="text-red-700 text-sm">
                  Our games are designed for entertainment. Users are solely responsible for their 
                  alcohol consumption and must drink responsibly.
                </p>
              </div>
              
              <p class="text-gray-600 leading-relaxed">We strongly encourage:</p>
              <ul class="list-disc list-inside space-y-1 text-gray-600 ml-4">
                <li>Having a designated driver</li>
                <li>Drinking water between rounds</li>
                <li>Knowing your limits</li>
                <li>Eating food before and during games</li>
                <li>Creating a safe environment for all players</li>
              </ul>
              
              <p class="text-gray-600 leading-relaxed">
                Drink Games promotes responsible gaming and does not encourage excessive 
                alcohol consumption. Players can adapt our games for non-alcoholic play.
              </p>
            </div>
          </CardBody>
        </Card>

        <!-- Disclaimer -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">5. Disclaimer</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              The materials on Drink Games' website are provided on an 'as is' basis. 
              Drink Games makes no warranties, expressed or implied, and hereby disclaims 
              and negates all other warranties including without limitation, implied warranties 
              or conditions of merchantability, fitness for a particular purpose, or 
              non-infringement of intellectual property or other violation of rights.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Further, Drink Games does not warrant or make any representations concerning 
              the accuracy, likely results, or reliability of the use of the materials on 
              its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </CardBody>
        </Card>

        <!-- Limitations -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">6. Limitations</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              In no event shall Drink Games or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to 
              business interruption) arising out of the use or inability to use the materials 
              on Drink Games' website, even if Drink Games or an authorized representative 
              has been notified orally or in writing of the possibility of such damage.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Because some jurisdictions do not allow limitations on implied warranties, 
              or limitations of liability for consequential or incidental damages, these 
              limitations may not apply to you.
            </p>
          </CardBody>
        </Card>

        <!-- User Conduct -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">7. User Conduct</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              When using our services, you agree to:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-green-700 mb-2">✓ Allowed Activities</h4>
                <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Use games for personal entertainment</li>
                  <li>Play responsibly with friends</li>
                  <li>Adapt rules for your group</li>
                  <li>Share experiences respectfully</li>
                  <li>Report any issues to us</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-red-700 mb-2">✗ Prohibited Activities</h4>
                <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Commercial use without permission</li>
                  <li>Encouraging excessive drinking</li>
                  <li>Harassment of other users</li>
                  <li>Violating local laws</li>
                  <li>Reverse engineering our software</li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>

        <!-- Privacy -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">8. Privacy</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              Your privacy is important to us. Please see our Privacy Policy for information 
              about how we collect, use, and protect your information.
            </p>
            <Button
              :variant="ButtonVariant.INFO"
              :size="ButtonSize.MEDIUM"
              icon="mdiShield"
              :icon-position="ButtonIconPosition.LEFT"
              @click="() => $router.push('/privacy')"
              class="inline-flex"
            >
              View Privacy Policy
            </Button>
          </CardBody>
        </Card>

        <!-- Revisions -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">9. Revisions and Errata</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              The materials appearing on Drink Games' website could include technical, 
              typographical, or photographic errors. Drink Games does not warrant that 
              any of the materials on its website are accurate, complete, or current.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Drink Games may make changes to the materials contained on its website 
              at any time without notice. However, Drink Games does not make any 
              commitment to update the materials.
            </p>
          </CardBody>
        </Card>

        <!-- Governing Law -->
        <Card :size="CardSize.FULL" class="bg-white">
          <CardBody :padding="CardSize.LARGE">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">10. Governing Law</h2>
            <p class="text-gray-600 leading-relaxed">
              These terms and conditions are governed by and construed in accordance 
              with the laws of [Your Jurisdiction] and you irrevocably submit to the 
              exclusive jurisdiction of the courts in that State or location.
            </p>
          </CardBody>
        </Card>

        <!-- Accept Terms -->
        <Card :size="CardSize.FULL" class="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardBody :padding="CardSize.LARGE" class="text-center">
            <h2 class="text-2xl font-bold mb-4">Ready to Play?</h2>
            <p class="mb-6 text-blue-100">
              By continuing to use our services, you acknowledge that you have read, 
              understood, and agree to these terms.
            </p>
            <div class="flex gap-4 justify-center">
              <Button
                :variant="ButtonVariant.SUCCESS"
                :size="ButtonSize.LARGE"
                icon="mdiCheck"
                :icon-position="ButtonIconPosition.LEFT"
                @click="() => $router.push('/')"
                class="bg-white text-blue-600 hover:bg-gray-100"
              >
                I Agree - Start Playing
              </Button>
              <Button
                :variant="ButtonVariant.GHOST"
                :size="ButtonSize.LARGE"
                icon="mdiArrowLeft"
                :icon-position="ButtonIconPosition.LEFT"
                @click="() => $router.push('/')"
                class="text-white border-white hover:bg-white hover:text-blue-600"
              >
                Back to Home
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
// Meta tags para SEO
useHead({
  title: 'Terms of Service - Drink Games | Legal Information',
  meta: [
    { 
      name: 'description', 
      content: 'Read the complete terms of service for Drink Games. Understand your rights, responsibilities, and our policies for responsible gaming.' 
    },
    { 
      name: 'keywords', 
      content: 'terms of service, legal, user agreement, drinking games terms, responsible gaming policy' 
    },
    { property: 'og:title', content: 'Terms of Service - Drink Games' },
    { property: 'og:description', content: 'Complete terms of service and legal information for Drink Games platform.' },
    { name: 'robots', content: 'index, follow' }
  ]
})

// Fecha de última actualización
const lastUpdated = ref("June 2025");
</script>

<style scoped>
/* Estilos para mejorar la legibilidad */
.text-gray-600 {
  line-height: 1.7;
}

.bg-white {
  background-color: white !important;
}

/* Asegurar que los enlaces se vean bien */
a {
  color: #3b82f6;
  text-decoration: underline;
}

a:hover {
  color: #1d4ed8;
}

/* Mejorar la apariencia de las listas */
ul li, ol li {
  margin-bottom: 0.25rem;
}

/* Espaciado consistente para las cards */
.space-y-8 > * + * {
  margin-top: 2rem;
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