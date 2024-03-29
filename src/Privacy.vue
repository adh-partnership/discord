<template>
  <div class="flex flex-col" style="width: 500px;">
    <div>
      <h1 class="text-4xl">Privacy Policy</h1>
      <h3 class="text-2xl mb-1">Information We Collect</h3>
      <p> To help enhance the web experience, we collect information across a series of products and services all to
        enhance the end user's experience. We collect information in the following ways: </p>
      <ul class="list-disc pl-4 mb-2">
        <li><b>Information you give us.</b> When you register an account with VATSIM and transfer to {{ name }}, login to
          the {{ name }} service, take a quiz, use our Computer Based Training (CBT) system, or participate in the
          forums, information that is generally considered personal is given to us from you and VATSIM to include, but is
          not limited to: your name and email address. </li>
        <li><b>Information we get from you.</b> Some other information is passed by your computer or electronic device,
          web browser, and VATSIM client. Information can include: your IP address, web browser type and version, device
          specific information (such as operating system, unique device identifiers and mobile network information). This
          information may be linked to your account. </li>
        <li><b>Log Information.</b> Each time you perform an action on {{ name }} services, your action is logged.
          Information logged can include: type of action, data being sent and received, IP address the request originated
          from, software used to make the request, identification cookies, and the results of the request. </li>
        <li><b>Location Information.</b> Your location information may be associated with each request through geolocation
          against the originating IP address, information given to us by you or given to us by you through VATSIM. </li>
        <li><b>Analytical Information.</b> Via Google Analytics, we may collect anonymized statistical information to
          include: age, gender, location, device information, web browser type and version, ISPs, mobile network provider
          information, etc. for the purposes of identifying trends and better target our platforms. </li>
        <li><b>Storage Location.</b> Data is stored and encrypted on services owned or leased by {{ name }} within the
          United States. </li>
      </ul>
      <h3 class="text-2xl mb-1">Information Usage</h3>
      <p> To help enhance the {{ name }} experience, we collect information across a series of products and services all
        to enhance the user experience. </p>
      <p>We use the information collected to provide, maintain, protect and improve our services.</p>
      <p> The information we collect is maintained with confidentiality to the extent possible. The following information
        is shared with {{ name }} associated facilities: </p>
      <ul class="list-disc pl-4 mb-2">
        <li>VATSIM CERT Identification Number (CID)</li>
        <li>Your name</li>
        <li>Your VATSIM achievements and ratings</li>
        <li>Your VATSIM associated email address</li>
        <li>{{ name }} associations, VATSIM region and division associations</li>
        <li>{{ name }} staff associations and {{ name }} staff email addresses</li>
      </ul>
      <p>The following information may be shared publicly:</p>
      <ul class="list-disc pl-4 mb-2">
        <li>VATSIM CERT Identification Number (CID)</li>
        <li>Your name</li>
        <li>{{ name }} staff associations and {{ name }} staff email addresses</li>
        <li>{{ name }} associations, VATSIM region and division associations</li>
        <li>VATSIM achievements and ratings</li>
      </ul>
      <p> The following information is collected and may be used to protect our services, up to and including cooperation
        with legal requests for information from Law Enforcement agencies: </p>
      <ul class="list-disc pl-4 mb-2">
        <li>The above listed public information,</li>
        <li>All IP addresses used and associated with your account</li>
        <li>Geolocation against aforementioned IP addresses</li>
        <li>Activities performed with the {{ name }} web services</li>
      </ul>
      <p> We may store identification tokens and other limited information on your electronic device through web storage
        or cookie usage. </p>
      <h3 class="text-2xl mb-1">Who We Share With</h3>
      <p>The information we collect may be shared, in limited capacities, with the following:</p>
      <ul class="list-disc pl-4 mb-2">
        <li>Virtual Air Traffic Simulation Network (<a href="https://vatsim.net/">www.vatsim.net</a>)</li>
        <li>VATUSA (<a href="https://vatusa.net/">www.vatusa.net</a>)</li>
        <li>Other {{ name }} partners</li>
        <li>Law Enforcement agencies</li>
        <li>Google Analytics</li>
      </ul>
      <p>For more information on what is shared with whom, please see "How We Use Information".</p>
      <h3 class="text-2xl mb-1">Email Address Access</h3>
      <p>Email addresses are heavily restricted at {{ name }}. They are not accessable outside of the Webmaster, except
        when:</p>
      <ul class="list-disc pl-4 mb-2">
        <li>Submitting pilot feedback, where your email is shared with {{ name }} Senior Staff until the feedback is
          marked resolved. Once resolved, email addresses are purged from the feedback.</li>
      </ul>
      <p>Automated emails sent by {{ name }}'s backend include:</p>
      <ul class="list-disc pl-4 mb-2">
        <li>Visiting Application resolution or Visiting access removal</li>
        <li>Inactivity Warnings</li>
      </ul>
      <p>Automated emails are sent with the intended recipient listed as a <a
          href="https://www.britannica.com/dictionary/eb/qa/The-Meaning-of-CC-and-BCC-in-Emails">BCC recipient</a> to
        further mask your email address from other recipients of the warning.</p>
      <h3 class="text-2xl mb-1">Cookie Usage</h3>
      <p> We use various technologies to collect and store information when you visit and use a {{ name }} service. This
        may include a cookie or other similar technologies to identify your browser or device. We also use Google
        Analytics to help analyze the traffic to our websites and the information may be linked, by Google Analytics, with
        customers for information across multiple websites. </p>
      <p> Our cookies are mainly used as a means of tracking virtual users across the {{ name }} domain. This allows us
        to know who is requesting and using our services, provide authentication and authorization checks to restricted
        areas. </p>
      <p> You may choose to disable cookie usage via your browser, but know that doing so will prevent access and use
        across restricted areas of the website and severely degrade your experience. </p>
      <h3 class="text-2xl mb-1">Opt Out</h3>
      <p> Given the nature of our services, it is not possible to opt out of data collection and use our services. But if
        you desire to opt out and no longer desire to use our services, we will purge all information we have collected
        upon written request. </p>
      <p> The first step is to deactivate and request VATSIM to purge your data. Please head to <a
          href="https://membership.vatsim.net/">https://membership.vatsim.net</a> to do so. </p>
      <p> After VATSIM has purged your data, please send a written request to {{ name }}'s Air Traffic Manager by
        emailing <a :href="`mailto:atm@$domain`"
          class="text-colorado-blue dark:text-colorado-yellow hover:text-colorado-red hover:dark:text-colorado-red underline">atm@{{
            domain }}</a>.
        It is a manual process, so please allow up to 30 days for information to be purged. You will receive an email
        response once the data has been purged. </p>
      <p> Note {{ name }} cannot guarantee that information collected by parties outside of {{ name }} will be purged in
        the process. </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref(import.meta.env.VITE_FACILITY_NAME);
const domain = ref(import.meta.env.VITE_EMAIL_DOMAIN);
</script>