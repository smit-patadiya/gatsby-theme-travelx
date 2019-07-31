exports.createPages = ({ actions, reporter }) => {
  reporter.warn("make sure to load data from somewhere!")

  // TODO replace this with data from somewhere
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/page.js"),
    context: {
      heading: "Welcome to  TravelX",
      content: `
        <main>
        
        <div class="container">

            <!-- Info -->
            <section class="grid-row grid-row--center">
                <!-- Cabin -->
                <div class="grid-column span-half pt3 pb3 mobile-m order-1">
                    <div class="relative">
                        <h3>Cabin</h3>
                    </div>
                </div>
                <div class="grid-column span-half pt3 pb3 mobile-m order-2">
                    
                    <p>Illa argumenta propria videamus, cur omnia sint paria peccata. Quamquam te quidem video minime esse deterritum. Beatus sibi videtur esse moriens. In qua quid est boni praeter summam&nbsp;voluptatem.</p>
                </div>
                <!-- Teepees -->
                <div class="grid-column span-half pt3 pb3 mobile-m order-4">
                    <p>A quibus propter discendi cupiditatem videmus ultimas terras esse peragratas. Laelius clamores sofòw ille so lebat Edere compellans gumias ex ordine&nbsp;nostros.</p>
                </div>
                <div class="grid-column span-half pt3 pb3 mobile-m order-3">
                    <div class="relative">
                        <h3>Teepees</h3>
                    </div>
                </div>
                <!-- Fishing -->
                <div class="grid-column span-half pt3 pb3 mobile-m order-5">
                    <div class="relative">
                        <h3>Fishing</h3>
                    </div>
                </div>
                <div class="grid-column span-half pt3 pb3 mobile-m order-6">
                    <p>Que Manilium, ab iisque M. Intellegi quidem, ut propter aliam quampiam rem, verbi gratia propter voluptatem, nos amemus; An eum locum libenter invisit&nbsp;ultimas.</p>
                </div>
                <!-- Archery -->
                <div class="grid-column span-half pt3 pb3 mobile-m order-8">
                    <p>At ille pellit, qui permulcet sensum voluptate. Quid in isto egregio tuo officio et tanta fide-sic enim existimo-ad corpus refers? Nec vero sum nescius esse utilitatem in&nbsp;historia.</p>
                </div>
                <div class="grid-column span-half pt3 pb3 mobile-m order-7">
                    <div class="relative">
                        <h3>Archery</h3>
                    </div>
                </div>
                <!-- Canoeing -->
                <div class="grid-column span-half pt3 pb3 mobile-m order-9">
                    <div class="relative">
                      <h3>Canoeing</h3>
                    </div>
                </div>
                <div class="grid-column span-half pt3 pb3 mobile-m order-10">
                    <p>Nam si propter voluptatem, quae est ista laus, quae possit e macello peti? Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum&nbsp;anteponebas.</p>
                </div>
            </section>

        </div>

        <!-- Contact -->
        <section class="bg--secondary-color pt3 pb3">
            <div class="container">
                <div class="mb2 align--center">
                    <h3 class="mb1">Contact us to get started</h3>
                    <p>We'll reply when we get back from&nbsp;fishing.</p>
                </div>
                <form>
                    <div class="grid-row">
                        <div class="grid-column span-half mt1">
                            <label class="label" for="name">Name</label>
                            <input class="form-control" id="name">
                        </div>
                        <div class="grid-column span-half mt1">
                            <label class="label" for="email">Email</label>
                            <input class="form-control" id="email" type="email">
                        </div>
                    </div>
                    <label class="label mt1" for="dates">Timeline</label>
                    <input class="form-control" id="dates">
                    <label class="label mt1" for="message">Message</label>
                    <textarea class="form-control" id="message"></textarea>
                    <div class="align--right mt1">
                        <button class="btn btn--outline">Send</button>
                    </div>
                </form>
            </div>
        </section>
        
    </main>
      `,
    },
  })
}
