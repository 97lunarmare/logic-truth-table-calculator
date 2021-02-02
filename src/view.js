// This file handles all drawing to the view, such as populating the common law cards.

const commonLaws = [
    {
        title: 'Identity Laws',
        logic: [
            ['(p and T)', 'p'],
            ['(p or F)', 'p']
        ],
        //desc: '`p` and `true` will always equate to be `p`.'
    },
    {
        title: 'Domination Laws',
        logic: [
            ['(p and F)', 'F'],
            ['(p or T)', 'T']
        ],
        //desc: '`p` and `false` will always equate to `false`.'
    },
    {
        title: 'Idempotent Laws',
        logic: [
            ['(p and p)', 'p'],
            ['(p or p)', 'p']
        ]
    },
    {
        title: 'Double Negation Law',
        logic: [
            ['not (not p)', 'p'],
            ['not (not T)', 'T']
        ]
    },
    {
        title: 'Commutative Laws',
        logic: [
            ['(p and q)', '(q and p)'],
            ['(p or q)', '(q or p)']
        ]
    },
    {
        title: 'Associative Laws',
        logic: [
            ['((p and q) and r)', '(p and (q and r))'],
            ['((p or q) or r)', '(p or (q and r))']
        ]
    },
    {
        title: 'Distributive Laws',
        logic: [
            ['(p and (q or r))', '((p and q) or (p and r))'],
            ['(p or (q and r))', '((p and q) or (p and r))']
        ]
    },
    {
        title: 'De Morgan\'s Law',
        logic: [
            ['!(p and q)', '(not p or not q)'],
            ['!(p or q)', '(not p and not q)']
        ]
    },
    {
        title: 'Absorption Laws',
        logic: [
            ['(p and (p or q))', 'p'],
            ['(p or (p and q))', 'p']
        ]
    },
    {
        title: 'Negation Laws',
        logic: [
            ['(p and !p)', 'F'],
            ['(p or !p)', 'T']
        ]
    }
];

function populateCommonLaws() {
    let bank = document.getElementById('commonLawsBank');

    commonLaws.forEach(law => {
        bank.innerHTML += `
            <div class="card" style="margin-right: 25px; margin-bottom: 25px;">
                <div class="card-body">
                    <h5 class="card-title">${law.title}</h5>
                    
                    <div class="my-2">
                        ${ law.logic.map(logic => '<code>' + prettyPrint(logic[0] + ' = ' + logic[1]) + '</code>').join('<br/>') }
                    </div>

                    <p class="card-text">${ //law.desc.replaceAll(/(?:`)([\w\s]*)(?:`)/gm, (whole, p1) => {
                    //    return '<code>' + p1 + '</code>'
                    //}) 
                    ''}</p>
                    <button class="btn btn-link" onclick="showTruthTable('${law.logic[0].join(', ')}')">View truth table</button>
                </div>
            </div>
        `;
    })
}

// Overrides the input field with specified logic to show the truth table
function showTruthTable(logic) {
    console.log(logic);
    let logicInputElem = document.getElementById('logic-input');
    logicInputElem.value = logic;
    logicInputElem.dispatchEvent(new Event('input'));
}

populateCommonLaws();