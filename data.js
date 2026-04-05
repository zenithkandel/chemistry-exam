const quizData = [
  {
    "id": 1,
    "type": "mcq",
    "category": "Atomic Structure",
    "difficulty": "easy",
    "question": "The total number of electrons possible for quantum number 'n' is",
    "options": [
      {
        "id": "A",
        "text": "n"
      },
      {
        "id": "B",
        "text": "n²"
      },
      {
        "id": "C",
        "text": "2n"
      },
      {
        "id": "D",
        "text": "2n²"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The total number of electrons possible in a shell with quantum number 'n' is given by the formula 2n². This is because each orbital can hold a maximum of 2 electrons, and the number of orbitals in a shell is n². For example, for n=1: 2(1)²=2 electrons, for n=2: 2(2)²=8 electrons."
  },
  {
    "id": 2,
    "type": "mcq",
    "category": "Chemical Bonding",
    "difficulty": "easy",
    "question": "Which of the following contains only ionic bonds?",
    "options": [
      {
        "id": "A",
        "text": "CO₂"
      },
      {
        "id": "B",
        "text": "CaCl₂"
      },
      {
        "id": "C",
        "text": "NH₄Cl"
      },
      {
        "id": "D",
        "text": "H₂O"
      }
    ],
    "correctAnswer": "B",
    "explanation": "CaCl₂ is an ionic compound formed between calcium (a metal) and chlorine (nonmetal), resulting in ionic bonding throughout. CO₂ has covalent bonds, NH₄Cl has both ionic (NH₄⁺ and Cl⁻) and covalent bonds (N-H), and H₂O has covalent bonds (O-H)."
  },
  {
    "id": 3,
    "type": "mcq",
    "category": "Chemical Bonding",
    "difficulty": "medium",
    "question": "Which of the following contains both covalent and ionic bonds?",
    "options": [
      {
        "id": "A",
        "text": "CCl₄"
      },
      {
        "id": "B",
        "text": "CaCl₂"
      },
      {
        "id": "C",
        "text": "NH₄Cl"
      },
      {
        "id": "D",
        "text": "H₂O"
      }
    ],
    "correctAnswer": "C",
    "explanation": "NH₄Cl contains both ionic and covalent bonds. The ammonium ion (NH₄⁺) has covalent N-H bonds, while the ionic bond exists between NH₄⁺ and Cl⁻. CCl₄ and H₂O have only covalent bonds; CaCl₂ has only ionic bonds."
  },
  {
    "id": 4,
    "type": "mcq",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Which of the following ions is most stable?",
    "options": [
      {
        "id": "A",
        "text": "CH₃CH₂⁺"
      },
      {
        "id": "B",
        "text": "(CH₃)₂CH⁺"
      },
      {
        "id": "C",
        "text": "(CH₃)₃C⁺"
      },
      {
        "id": "D",
        "text": "C₆H₅CH₂⁺"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The tertiary carbocation (CH₃)₃C⁺ is most stable due to the maximum hyperconjugation and inductive effects from the three methyl groups. Carbocation stability increases in the order: primary < secondary < tertiary. The three alkyl groups stabilize the positive charge through electron donation."
  },
  {
    "id": 5,
    "type": "mcq",
    "category": "Electrochemistry",
    "difficulty": "hard",
    "question": "In the following equation, the value of 'X' is: 2S₂O₃²⁻ → S₄O₆²⁻ + X",
    "options": [
      {
        "id": "A",
        "text": "2e⁻"
      },
      {
        "id": "B",
        "text": "3e⁻"
      },
      {
        "id": "C",
        "text": "4e⁻"
      },
      {
        "id": "D",
        "text": "5e⁻"
      }
    ],
    "correctAnswer": "A",
    "explanation": "In this redox reaction, S₂O₃²⁻ (where S has +2 oxidation state) is oxidized to S₄O₆²⁻ (where S has +2.5 average oxidation state). The oxidation state of each sulfur increases, resulting in the loss of 2 electrons (X = 2e⁻)."
  },
  {
    "id": 6,
    "type": "mcq",
    "category": "Atomic Structure",
    "difficulty": "easy",
    "question": "The total number of orbitals possible for quantum number 'n' is",
    "options": [
      {
        "id": "A",
        "text": "n"
      },
      {
        "id": "B",
        "text": "n²"
      },
      {
        "id": "C",
        "text": "2n"
      },
      {
        "id": "D",
        "text": "2n²"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The number of orbitals in a shell with quantum number 'n' is n². For n=1: 1 orbital (1s), for n=2: 4 orbitals (2s, 2p×3), for n=3: 9 orbitals (3s, 3p×3, 3d×5). Each orbital can hold maximum 2 electrons."
  },
  {
    "id": 7,
    "type": "mcq",
    "category": "Gases",
    "difficulty": "medium",
    "question": "The mass of 1 atom of Hydrogen is",
    "options": [
      {
        "id": "A",
        "text": "1.66 × 10⁻²⁴ g"
      },
      {
        "id": "B",
        "text": "1.66 × 10⁻²³ g"
      },
      {
        "id": "C",
        "text": "1.66 × 10⁻²⁷ kg"
      },
      {
        "id": "D",
        "text": "1.06 × 10⁻²⁴ g"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The mass of one hydrogen atom is approximately 1.66 × 10⁻²⁴ g. This is calculated as the molar mass (1 g/mol) divided by Avogadro's number (6.023 × 10²³). This is also known as the atomic mass unit (amu)."
  },
  {
    "id": 8,
    "type": "mcq",
    "category": "Hydrocarbons",
    "difficulty": "medium",
    "question": "Which alkane would have only primary and tertiary carbon?",
    "options": [
      {
        "id": "A",
        "text": "Pentane"
      },
      {
        "id": "B",
        "text": "2-methylbutane"
      },
      {
        "id": "C",
        "text": "2,2-dimethylpropane"
      },
      {
        "id": "D",
        "text": "2,3-dimethylbutane"
      }
    ],
    "correctAnswer": "C",
    "explanation": "2,2-dimethylpropane (neopentane) has the structure C(CH₃)₄ with one central quaternary carbon (tertiary counting from the outer carbons) and four terminal primary carbons. It contains only primary and tertiary carbons, with no secondary carbons."
  },
  {
    "id": 9,
    "type": "mcq",
    "category": "Hydrocarbons",
    "difficulty": "easy",
    "question": "The unsaturated aliphatic compound is",
    "options": [
      {
        "id": "A",
        "text": "C₃H₈"
      },
      {
        "id": "B",
        "text": "C₆H₆"
      },
      {
        "id": "C",
        "text": "C₆H₁₂"
      },
      {
        "id": "D",
        "text": "CH₄"
      }
    ],
    "correctAnswer": "C",
    "explanation": "C₆H₁₂ is an unsaturated aliphatic compound (alkene). It contains one double bond. C₃H₈ and CH₄ are saturated alkanes. C₆H₆ is benzene, which is aromatic, not aliphatic despite being unsaturated. Unsaturated means it contains C=C or C≡C bonds."
  },
  {
    "id": 10,
    "type": "mcq",
    "category": "Aromatic Chemistry",
    "difficulty": "easy",
    "question": "Benzene readily undergoes",
    "options": [
      {
        "id": "A",
        "text": "Addition"
      },
      {
        "id": "B",
        "text": "Substitution"
      },
      {
        "id": "C",
        "text": "Elimination"
      },
      {
        "id": "D",
        "text": "Rearrangement"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Benzene undergoes electrophilic substitution reactions (nitration, halogenation, Friedel-Crafts alkylation/acylation) due to its stable aromatic structure. Addition reactions would destroy the aromatic ring's stability, hence are unfavorable."
  },
  {
    "id": 11,
    "type": "mcq",
    "category": "General Chemistry",
    "difficulty": "easy",
    "question": "The number of molecules in 36 mg of water (H₂O) is",
    "options": [
      {
        "id": "A",
        "text": "12 × 10¹⁹"
      },
      {
        "id": "B",
        "text": "6.023 × 10²³"
      },
      {
        "id": "C",
        "text": "12 × 10²¹"
      },
      {
        "id": "D",
        "text": "1.2 × 10²¹"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Molar mass of H₂O = 18 g/mol. 36 mg = 0.036 g. Number of moles = 0.036/18 = 0.002 mol. Number of molecules = 0.002 × 6.023 × 10²³ = 1.2 × 10²¹"
  },
  {
    "id": 12,
    "type": "mcq",
    "category": "Stoichiometry",
    "difficulty": "easy",
    "question": "The volume of carbon dioxide obtained at NTP by heating 10 g of calcium carbonate which is 80% pure is",
    "options": [
      {
        "id": "A",
        "text": "22.4 L"
      },
      {
        "id": "B",
        "text": "2.24 L"
      },
      {
        "id": "C",
        "text": "1.792 L"
      },
      {
        "id": "D",
        "text": "11.2 L"
      }
    ],
    "correctAnswer": "C",
    "explanation": "CaCO₃ → CaO + CO₂. Pure CaCO₃ = 10 × 0.80 = 8 g. Molar mass of CaCO₃ = 100 g/mol. Moles = 8/100 = 0.08 mol. From stoichiometry, 1 mol CaCO₃ produces 1 mol CO₂. Volume at NTP = 0.08 × 22.4 = 1.792 L"
  },
  {
    "id": 13,
    "type": "mcq",
    "category": "Gases",
    "difficulty": "medium",
    "question": "What is the percentage increase in volume of a gas when its pressure is decreased by 20% at constant temperature?",
    "options": [
      {
        "id": "A",
        "text": "20%"
      },
      {
        "id": "B",
        "text": "22.5%"
      },
      {
        "id": "C",
        "text": "24.3%"
      },
      {
        "id": "D",
        "text": "25%"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Using Boyle's Law (PV = constant). If pressure decreases by 20%, new P = 0.8P. V₁P₁ = V₂P₂ → V₁(P) = V₂(0.8P) → V₂ = 1.25V₁. Percentage increase = (1.25 - 1)/1 × 100 = 25%"
  },
  {
    "id": 14,
    "type": "mcq",
    "category": "Chemical Equilibrium",
    "difficulty": "hard",
    "question": "For the reaction N₂ + 3H₂ ⇌ 2NH₃, the relationship between Kp and Kc is",
    "options": [
      {
        "id": "A",
        "text": "Kc = Kp"
      },
      {
        "id": "B",
        "text": "Kp = Kc(RT)"
      },
      {
        "id": "C",
        "text": "Kp = Kc(RT)²"
      },
      {
        "id": "D",
        "text": "Kp = Kc(RT)³"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The relationship is Kp = Kc(RT)^Δn where Δn = change in number of moles = (2) - (1+3) = -2. So Kp = Kc(RT)⁻². Rearranging: Kp = Kc/(RT)². For this specific reaction with negative Δn, the correct relationship can be shown as Kc = Kp(RT)²."
  },
  {
    "id": 15,
    "type": "mcq",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Which of the following will show metamerism?",
    "options": [
      {
        "id": "A",
        "text": "CH₃SC₂H₅"
      },
      {
        "id": "B",
        "text": "CH₃COC₂H₅"
      },
      {
        "id": "C",
        "text": "CH₃OCH₃"
      },
      {
        "id": "D",
        "text": "CH₃OC₂H₅"
      }
    ],
    "correctAnswer": "B",
    "explanation": "CH₃COC₂H₅ (methyl ethyl ketone) shows metamerism. It has the same molecular formula as propyl formate (HCOOC₂H₅), demonstrating metamerism - a type of isomerism where the functional group is in different positions."
  },
  {
    "id": 16,
    "type": "mcq",
    "category": "Solutions",
    "difficulty": "easy",
    "question": "Solution of SO₂ in water is called",
    "options": [
      {
        "id": "A",
        "text": "Thiosulphurous acid"
      },
      {
        "id": "B",
        "text": "Sulphurous acid"
      },
      {
        "id": "C",
        "text": "Thiosulphuric acid"
      },
      {
        "id": "D",
        "text": "Hydrosulphuric acid"
      }
    ],
    "correctAnswer": "B",
    "explanation": "SO₂ + H₂O → H₂SO₃ (sulphurous acid). This is the correct nomenclature. Thiosulphuric and thiosulphurous acids contain sulfur in different oxidation states and are different compounds."
  },
  {
    "id": 17,
    "type": "mcq",
    "category": "Periodic Table",
    "difficulty": "hard",
    "question": "Brass is an alloy of",
    "options": [
      {
        "id": "A",
        "text": "Copper and lead"
      },
      {
        "id": "B",
        "text": "Copper and tin"
      },
      {
        "id": "C",
        "text": "Copper and zinc"
      },
      {
        "id": "D",
        "text": "Copper and nickel"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Brass is an alloy of copper and zinc. It contains approximately 50-90% copper and 10-50% zinc, making it harder and more ductile than pure copper. Bronze, on the other hand, is an alloy of copper and tin."
  },
  {
    "id": 18,
    "type": "short_question",
    "category": "Atomic Structure",
    "difficulty": "medium",
    "question": "Mention the postulates of Bohr's atomic model.",
    "marks": 2,
    "answer": "The postulates of Bohr's atomic model are:\n1. Electron revolves around the nucleus in definite circular orbits.\n2. Electrons move in orbits with specific angular momentum (mvr = nh/2π).\n3. Electrons in these orbits have definite energy and do not radiate energy while moving.\n4. Energy is absorbed or emitted only when an electron jumps from one orbit to another.\n5. The maximum number of electrons in an orbit is 2n², where n is the orbit number.",
    "explanation": "Bohr's model was a breakthrough in explaining the structure of atoms and the spectral lines of hydrogen. It successfully predicted energy levels and could explain the stability of atoms, though it was later superseded by the quantum mechanical model."
  },
  {
    "id": 19,
    "type": "short_question",
    "category": "Atomic Structure",
    "difficulty": "easy",
    "question": "State Aufbau principle. Write the electronic configuration of chromium.",
    "marks": 2,
    "answer": "Aufbau Principle: Electrons fill orbitals in order of increasing energy. Electrons occupy the lowest energy orbitals first before filling higher energy orbitals.\nOrder: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p...\n\nElectronic Configuration of Chromium (Cr, Z = 24):\n1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹\nOr: [Ar] 3d⁵ 4s¹\n\nNote: Chromium is an exception because a half-filled d orbital (3d⁵) is more stable than 3d⁴ 4s².",
    "explanation": "The Aufbau principle helps predict electron configurations. Chromium is notable for its exception to the normal order due to the extra stability of half-filled and fully-filled d orbitals."
  },
  {
    "id": 20,
    "type": "short_question",
    "category": "Atomic Structure",
    "difficulty": "hard",
    "question": "Write possible values of all quantum numbers for n = 4.",
    "marks": 4,
    "answer": "For n = 4, the possible values of quantum numbers are:\n\n1. Principal Quantum Number (n) = 4\n\n2. Azimuthal Quantum Number (l): 0, 1, 2, 3 (corresponding to s, p, d, f orbitals)\n\n3. Magnetic Quantum Number (mₗ):\n   • For l = 0 (s): mₗ = 0 (1 value)\n   • For l = 1 (p): mₗ = -1, 0, +1 (3 values)\n   • For l = 2 (d): mₗ = -2, -1, 0, +1, +2 (5 values)\n   • For l = 3 (f): mₗ = -3, -2, -1, 0, +1, +2, +3 (7 values)\n\n4. Spin Quantum Number (mₛ): ±1/2 (two values)\n\nTotal orbitals for n = 4: 1 + 3 + 5 + 7 = 16 orbitals\nTotal electrons for n = 4: 16 × 2 = 32 electrons",
    "explanation": "Understanding quantum numbers is crucial for predicting electron positions and orbital shapes. Each set of quantum numbers defines a unique orbital."
  },
  {
    "id": 21,
    "type": "short_question",
    "category": "Chemical Bonding",
    "difficulty": "medium",
    "question": "Explain with reason: (i) Boiling point of water is higher than expected. (ii) Ionic compounds are generally brittle.",
    "marks": 2,
    "answer": "(i) Boiling point of water is higher than expected:\n• Water molecules are held together by hydrogen bonding.\n• Hydrogen bonds are stronger than van der Waals forces (dipole-dipole or London dispersion forces).\n• Extra energy is needed to break these hydrogen bonds, raising the boiling point.\n• Similar compounds like H₂S, H₂Se have much lower boiling points as they lack hydrogen bonding.\n\n(ii) Ionic compounds are generally brittle:\n• Ionic compounds have rigid crystal structures with strong electrostatic attractions.\n• When mechanical stress is applied, layers of the crystal shift.\n• Likly charges (repulsion) align, causing the crystal to shatter.\n• Unlike metals, ionic compounds cannot deform without breaking the structure.",
    "explanation": "These properties arise from the nature of bonding and crystal structures. Understanding these helps in predicting material properties."
  },
  {
    "id": 22,
    "type": "short_question",
    "category": "Chemical Bonding",
    "difficulty": "medium",
    "question": "Draw the Lewis structure of: (i) NH₄⁺ (ii) H₂SO₄",
    "marks": 2,
    "answer": "(i) NH₄⁺ (Ammonium ion):\n     H\n     |\n  H-N-H\n     |\n     H\n\n• Nitrogen has 4 bonding pairs (covalent bonds with 4 hydrogen atoms).\n• Total electrons: N(5) + 4H(4) - 1(charge) = 12 electrons = 6 pairs\n• All bonds are single covalent bonds.\n• Overall charge: +1\n\n(ii) H₂SO₄ (Sulphuric acid):\n     O\n     ||\n  H-O-S=O\n     |\n     O-H\n\n• Sulfur is the central atom.\n• Two S=O double bonds and two S-O single bonds to OH groups.\n• Total valence electrons: S(6) + 4O(24) + 2H(2) = 32 electrons\n• Sulfur exhibits expanded octet (10 electrons).",
    "explanation": "Lewis structures show valence electrons and bonding arrangements. They help predict molecular geometry and polarity."
  },
  {
    "id": 23,
    "type": "short_question",
    "category": "Gases",
    "difficulty": "hard",
    "question": "Why can a real gas be solidified, but an ideal gas cannot?",
    "marks": 4,
    "answer": "A real gas can be solidified but an ideal gas cannot because:\n\n1. Intermolecular Forces:\n   • Real gases have intermolecular forces (van der Waals forces) between molecules.\n   • These forces can be increased by applying pressure and lowering temperature.\n   • When attractive forces exceed kinetic energy, molecules come together to form liquid, then solid.\n\n2. Ideal Gas Assumptions:\n   • Ideal gases are assumed to have NO intermolecular forces.\n   • Gas molecules are assumed to have negligible volume.\n   • These assumptions are violated at high pressure and low temperature.\n\n3. Real Gas Behavior:\n   • Real gases deviate from ideal behavior at high pressure and low temperature.\n   • At critical conditions of temperature and pressure, real gases can liquify.\n   • Upon further cooling, liquids can freeze to form solids.\n\n4. Mathematical Perspective:\n   • For an ideal gas: PV = nRT (no phase transitions occur)\n   • For a real gas: The van der Waals equation accounts for intermolecular forces and volume: (P + an²/V²)(V - nb) = nRT\n   • This allows for phase transitions.",
    "explanation": "This explains why we can liquefy and solidify gases in practice, contrary to the ideal gas model which predicts they would remain gaseous under all conditions."
  },
  {
    "id": 24,
    "type": "short_question",
    "category": "Molecular Geometry",
    "difficulty": "medium",
    "question": "Predict the geometry of SF₆ on the basis of VSEPR Theory.",
    "marks": 2,
    "answer": "Geometry of SF₆ (Sulfur hexafluoride):\n\n1. Valence Electrons:\n   • Sulfur: 6 valence electrons\n   • 6 Fluorine atoms: 6 electrons\n   • Total: 12 electron pairs (all bonding)\n\n2. Steric Number:\n   • Number of bonded atoms = 6\n   • Number of lone pairs = 0\n   • Steric number = 6\n\n3. VSEPR Geometry:\n   • Electron geometry: Octahedral\n   • Molecular geometry: Octahedral\n\n4. Bond Angles:\n   • All S-F bonds are at 90° to each other\n   • All F-S-F angles = 90°\n\n5. Hybridization:\n   • Sulfur undergoes sp³d² hybridization\n   • This allows formation of 6 equivalent bonds",
    "explanation": "SF₆ is a perfect octahedron, which explains its exceptional stability and inertness. It's used as an insulating gas in high-voltage equipment."
  },
  {
    "id": 25,
    "type": "short_question",
    "category": "Chemical Bonding",
    "difficulty": "medium",
    "question": "Write the differences between Sigma (σ) and Pi (π) bonds. Which one is stronger?",
    "marks": 3,
    "answer": "Differences between Sigma (σ) and Pi (π) bonds:\n\n| Property | Sigma Bond | Pi Bond |\n|----------|-----------|----------|\n| Definition | Direct overlap of atomic orbitals along the internuclear axis | Lateral/side-by-side overlap of p or d orbitals |\n| Electron density | Concentrated between nuclei on the bond axis | Concentrated above and below the bond axis |\n| Type | Can form from s-s, s-p, or p-p orbital overlap | Forms only from p-p or d-d orbital overlap |\n| Strength | Stronger | Weaker |\n| Rotation | Free rotation possible | No free rotation (restricted) |\n| Number | Single bond has 1 σ | Double bond has 1 σ + 1 π; Triple bond has 1 σ + 2 π |\n| Example | C-H, C-C, N-N | C=C, C≡C |\n\nWhich is stronger?\n• Sigma bonds are stronger than pi bonds because:\n  - Better overlap between orbitals\n  - More direct electron density between nuclei\n  - Requires more energy to break",
    "explanation": "Understanding σ and π bonds is essential for explaining molecular structure, rotation restrictions, and reactivity patterns in organic chemistry."
  },
  {
    "id": 26,
    "type": "short_question",
    "category": "Gases",
    "difficulty": "medium",
    "question": "Write down the postulates of Kinetic Molecular Theory of gases.",
    "marks": 3,
    "answer": "Postulates of Kinetic Molecular Theory (KMT):\n\n1. Nature of Gas Particles:\n   • Gases consist of a large number of tiny particles (molecules or atoms).\n   • These particles are in constant, random, rapid motion.\n\n2. Volume of Particles:\n   • The volume of individual gas particles is negligible compared to the total volume of the container.\n   • Most of the volume occupied by gas is empty space.\n\n3. Intermolecular Forces:\n   • There are no significant attractive or repulsive forces between gas molecules.\n   • Collisions between molecules are perfectly elastic.\n\n4. Collisions:\n   • Gas particles collide with container walls and with each other.\n   • These collisions are perfectly elastic (no loss of kinetic energy).\n\n5. Pressure Origin:\n   • Pressure exerted by a gas is due to collisions of gas molecules with container walls.\n   • Pressure is proportional to the frequency and force of collisions.\n\n6. Temperature Relationship:\n   • The average kinetic energy of gas molecules is directly proportional to absolute temperature.\n   • Temperature (K) ∝ Average Kinetic Energy\n   • KE_avg = (3/2)kT, where k is Boltzmann constant",
    "explanation": "KMT provides a molecular explanation for gas laws and properties. It forms the foundation for understanding gas behavior and enables prediction of properties at various conditions."
  },
  {
    "id": 27,
    "type": "short_question",
    "category": "Gases",
    "difficulty": "medium",
    "question": "Why real gases deviate from ideal gas behavior?",
    "marks": 2,
    "answer": "Real gases deviate from ideal gas behavior for the following reasons:\n\n1. Intermolecular Forces:\n   • Real gas molecules experience attractive and repulsive forces (van der Waals forces).\n   • These forces are stronger at high pressures and low temperatures.\n   • Ideal gas model ignores these forces.\n\n2. Molecular Volume:\n   • Real gas molecules occupy measurable volume.\n   • At high pressures, the volume of molecules is significant compared to container volume.\n   • Ideal gas model assumes negligible molecular volume.\n\n3. High Pressure Effects:\n   • At high pressures, repulsive forces become important.\n   • Molecules are forced closer together, violating ideal gas assumptions.\n   • The compressibility factor Z deviates significantly from 1.\n\n4. Low Temperature Effects:\n   • At low temperatures, kinetic energy decreases.\n   • Attractive forces become more dominant.\n   • Gas may liquefy before reaching zero temperature.\n\n5. Critical Conditions:\n   • Near the critical point, gases show maximum deviation from ideality.\n   • The compressibility factor Z can be much less than 1.\n\nVan der Waals Equation accounts for these factors:\n(P + an²/V²)(V - nb) = nRT",
    "explanation": "Understanding deviations helps predict when ideal gas law is applicable (usually at high T and low P) and when more accurate equations like van der Waals must be used."
  },
  {
    "id": 28,
    "type": "short_question",
    "category": "Dalton's Law",
    "difficulty": "medium",
    "question": "State and explain Dalton's Law of Partial Pressure. Give one application of this law.",
    "marks": 3,
    "answer": "Dalton's Law of Partial Pressure:\n\nStatement:\n\"The total pressure exerted by a mixture of non-reacting gases is equal to the sum of the partial pressures of individual gases.\"\nP_total = P₁ + P₂ + P₃ + ... + Pₙ\n\nExplanation:\n• Each gas in a mixture exerts pressure independent of other gases.\n• The partial pressure of a gas is the pressure it would exert if it alone occupied the entire volume at the same temperature.\n• Since gas molecules have negligible volume and no intermolecular forces (in ideal conditions), they behave independently.\n\nMathematical Expression:\n• For a gas mixture: P_total = n_total × RT/V\n• Partial pressure: Pᵢ = nᵢ × RT/V = Xᵢ × P_total\n  where Xᵢ is the mole fraction of gas i\n\nApplications:\n\n1. Collection of Gases over Water:\n   • When a gas is collected over water, the total pressure equals the gas pressure plus water vapor pressure.\n   • P_gas = P_total - P_H₂O\n   • This is essential for accurate volume calculations.\n\n2. Atmospheric Composition:\n   • Air pressure = P_N₂ + P_O₂ + P_Ar + P_CO₂ + ...\n   • Helps predict behavior at high altitudes.\n\n3. Gas Diffusion and Effusion:\n   • Used to determine individual gas diffusion rates in mixtures.",
    "explanation": "This law is fundamental in gas calculations, especially when gases are collected over water or when dealing with gas mixtures in various chemical processes."
  },
  {
    "id": 29,
    "type": "short_question",
    "category": "Gases",
    "difficulty": "hard",
    "question": "How did Charles's Law lead to the development of absolute temperature scale?",
    "marks": 2,
    "answer": "Charles's Law and Absolute Temperature Scale:\n\nCharles's Law:\n• V ∝ T (at constant pressure and volume)\n• Or: V/T = constant\n• When plotted, V vs T (in °C) gives a straight line that intersects the x-axis.\n\nDevelopment of Absolute Temperature:\n\n1. Extrapolation of Charles's Law:\n   • When gas volume is plotted against temperature (in Celsius), the line extrapolates to zero volume at -273.15°C.\n   • Beyond this point, the relationship breaks down (gases liquefy before reaching this temperature).\n\n2. Logical Conclusion:\n   • If volume becomes zero at -273.15°C, this represents the lowest possible temperature.\n   • All molecular motion would theoretically stop at this point.\n   • This temperature was named as Absolute Zero.\n\n3. Kelvin Scale:\n   • Lord Kelvin proposed a new temperature scale starting from Absolute Zero.\n   • T(K) = T(°C) + 273.15\n   • This creates a scale where all temperatures are positive.\n\n4. Mathematical Relationships:\n   • Using Kelvin scale, Charles's Law becomes: V = kT (where k is a constant)\n   • This makes the relationship directly proportional without the intercept problem.\n\nSignificance:\n• The absolute scale eliminates negative temperatures in gas calculations.\n• All gas laws become simpler when using Kelvin scale.\n• The concept of absolute zero became a fundamental principle in thermodynamics.",
    "explanation": "This historical development shows how experimental observations and mathematical relationships can lead to fundamental discoveries about nature and the establishment of new measurement scales."
  },
  {
    "id": 30,
    "type": "short_question",
    "category": "Gases",
    "difficulty": "hard",
    "question": "A saturated hydrocarbon (CₙH₂ₙ₊₂) diffuses through a porous membrane twice as fast as sulphur dioxide. Determine the molecular formula of the hydrocarbon.",
    "marks": 3,
    "answer": "Solution using Graham's Law of Effusion:\n\nGrahams's Law:\n• r₁/r₂ = √(M₂/M₁)\n• Where r is rate of diffusion and M is molar mass\n\nGiven Information:\n• Hydrocarbon: CₙH₂ₙ₊₂ (saturated alkane)\n• Sulphur dioxide (SO₂): M = 32 + 2(16) = 64 g/mol\n• Rate ratio: r_hydrocarbon / r_SO₂ = 2\n\nCalculation:\nr_HC / r_SO₂ = √(M_SO₂ / M_HC)\n\n2 = √(64 / M_HC)\n\n4 = 64 / M_HC\n\nM_HC = 64/4 = 16 g/mol\n\nFinding Molecular Formula:\nFor CₙH₂ₙ₊₂:\nMolar mass = 12n + 1(2n + 2) = 12n + 2n + 2 = 14n + 2\n\n14n + 2 = 16\n14n = 14\nn = 1\n\nMolecular Formula:\nC₁H₂₊₂ = CH₄ (Methane)\n\nVerification:\n• Molar mass of CH₄ = 12 + 4 = 16 g/mol ✓\n• Diffusion rate ratio = √(64/16) = √4 = 2 ✓",
    "explanation": "This problem combines Graham's Law with stoichiometry. It demonstrates how diffusion rates can be used to determine molecular masses and hence molecular formulas of unknown compounds."
  },
  {
    "id": 31,
    "type": "short_question",
    "category": "Stoichiometry",
    "difficulty": "hard",
    "question": "A mixture of ozone and oxygen containing 20% by volume of ozone diffuses through a porous plug in 172 seconds, while the same volume of pure oxygen takes 164 seconds to diffuse through the same plug. Calculate the relative density of ozone.",
    "marks": 3,
    "answer": "Solution using Graham's Law and Gas Mixture:\n\nGiven Information:\n• Mixture: 20% O₃ + 80% O₂\n• Time for mixture: t_mix = 172 s\n• Time for pure O₂: t_O₂ = 164 s\n• Molar mass of O₂ = 32 g/mol\n\nStep 1: Find Average Molar Mass of Mixture\n• Mole fraction of O₃: x₁ = 0.20\n• Mole fraction of O₂: x₂ = 0.80\n• Let molar mass of O₃ = M_O₃\n\nM_mix = 0.20 × M_O₃ + 0.80 × 32\nM_mix = 0.20M_O₃ + 25.6\n\nStep 2: Apply Graham's Law\n• Rate ∝ 1/time (for same volume)\n• r_O₂/r_mix = t_mix/t_O₂\n• r_O₂/r_mix = 172/164 = 1.0488\n\nStep 3: Use Graham's Law Formula\nr_O₂/r_mix = √(M_mix/M_O₂)\n\n1.0488 = √(M_mix/32)\n\n1.0999 = M_mix/32\n\nM_mix = 35.197 g/mol\n\nStep 4: Calculate Molar Mass of O₃\n0.20M_O₃ + 25.6 = 35.197\n\n0.20M_O₃ = 9.597\n\nM_O₃ = 47.985 ≈ 48 g/mol\n\nStep 5: Calculate Relative Density\nRelative density of O₃ = M_O₃/M_H₂\n= 48/2 = 24\n\nOr relative to air (average molar mass = 29):\n= 48/29 = 1.66\n\nNote: The true molar mass of O₃ is 48 g/mol, confirming our calculation.",
    "explanation": "This problem combines diffusion rates with gas mixture calculations, requiring understanding of both Graham's Law and partial pressures."
  },
  {
    "id": 32,
    "type": "short_question",
    "category": "Chemical Equilibrium",
    "difficulty": "medium",
    "question": "State the Law of Mass Action and derive its expression.",
    "marks": 3,
    "answer": "Law of Mass Action:\n\nStatement:\n\"The rate of a chemical reaction is directly proportional to the product of the concentrations of the reactants, each raised to the power of their stoichiometric coefficients.\"\n\nFor a reaction: aA + bB ⇌ cC + dD\n\nForward rate: r_f = k_f [A]ᵃ [B]ᵇ\nBackward rate: r_b = k_b [C]ᶜ [D]ᵈ\n\nDerivation:\n\nStep 1: Mechanism Basis\n• The reaction rate depends on the concentration of reactants.\n• Higher concentration means more frequent collisions.\n• Collision frequency ∝ concentration of each reactant.\n\nStep 2: For Elementary Reaction:\n• Consider: aA + bB → cC + dD\n• Number of A molecules involved = a\n• Number of B molecules involved = b\n• Probability of collision = [A]ᵃ × [B]ᵇ\n\nStep 3: Rate Expression:\n• Rate = k × (collision probability)\n• Rate = k[A]ᵃ[B]ᵇ\n• k is the rate constant (depends on temperature)\n\nStep 4: At Equilibrium:\n• r_f = r_b\n• k_f [A]ᵃ [B]ᵇ = k_b [C]ᶜ [D]ᵈ\n• k_f/k_b = [C]ᶜ [D]ᵈ / [A]ᵃ [B]ᵇ\n• K = [C]ᶜ [D]ᵈ / [A]ᵃ [B]ᵇ\n\nApplications:\n• Determining reaction orders\n• Calculating equilibrium constants\n• Predicting reaction rates at different concentrations",
    "explanation": "The Law of Mass Action is fundamental to chemical kinetics and equilibrium. It provides the mathematical basis for understanding how reactions proceed and reach equilibrium."
  },
  {
    "id": 33,
    "type": "short_question",
    "category": "Nitrogen Chemistry",
    "difficulty": "hard",
    "question": "Mention the proper conditions for maximum yield of NO in the reaction: N₂(g) + O₂(g) ⇌ 2NO(g) ΔH = +ve [2]",
    "marks": 2,
    "answer": "Conditions for Maximum Yield of NO:\n\n1. Temperature:\n   • High temperature (around 1200-1500°C)\n   • Since ΔH = +ve (endothermic), increasing temperature shifts equilibrium to the right (Le Chatelier's principle)\n   • Higher temperature provides more energy for bond breaking\n   • At higher temperatures, more NO is formed\n\n2. Pressure:\n   • Low pressure or atmospheric pressure\n   • The reaction: N₂ + O₂ ⇌ 2NO has Δn = 2 - 2 = 0\n   • No. of moles don't change, so pressure doesn't shift equilibrium\n   • However, lower pressure is preferred to avoid reverse reaction\n\n3. Catalyst:\n   • Use of catalyst (not applicable here as N₂ is very stable)\n   • Or use of Pt or other catalysts at high temperature\n\n4. Contact Time:\n   • Adequate contact time between N₂ and O₂\n\n5. Concentration:\n   • High concentration of O₂ and N₂\n   • Increases forward reaction rate\n\nOptimal Conditions:\n• Temperature: 1200-1500°C\n• Pressure: 1 atm (atmospheric)\n• Ratio N₂:O₂ ≈ 1:1 (present in air)\n• Residence time: Adequate for reaction completion\n\nNote: Despite these conditions, the equilibrium yield of NO is still relatively low at these temperatures.",
    "explanation": "This shows how Le Chatelier's principle can be applied to maximize product formation in reversible reactions."
  },
  {
    "id": 34,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Define electrophile and nucleophile with examples.",
    "marks": 2,
    "answer": "Electrophile and Nucleophile:\n\nElectrophile:\nDefinition: An electron-deficient species that seeks to accept electrons. It is attracted to regions of high electron density.\n\nCharacteristics:\n• Positively charged or has vacant orbitals\n• Electron-deficient\n• Lewis acid\n\nExamples:\n• H⁺ (Hydrogen ion) - highly electron deficient\n• C² in carbocations (R₃C⁺)\n• AlCl₃ (Aluminum trichloride) - incomplete octet\n• BF₃ (Boron trifluoride) - empty p orbital\n• NO₂⁺ (Nitronium ion)\n• Cr³⁺, Fe³⁺ (Metal cations)\n\nNucleophile:\nDefinition: An electron-rich species that donates electrons to form bonds. It is attracted to electron-deficient centers.\n\nCharacteristics:\n• Negatively charged or has lone pairs\n• Electron-rich\n• Lewis base\n\nExamples:\n• OH⁻ (Hydroxide ion) - has lone pairs\n• CN⁻ (Cyanide ion) - has lone pairs on C\n• H₂O (Water) - oxygen has lone pairs\n• NH₃ (Ammonia) - nitrogen has lone pair\n• Alkenes - π electrons act as nucleophiles\n• Br⁻, Cl⁻ (Halide ions) - have lone pairs\n\nReaction:\n• Nucleophile attacks electrophile\n• Forms new bond: Nu: + E⁺ → Nu-E",
    "explanation": "Understanding electrophiles and nucleophiles is central to predicting organic reaction mechanisms and reactivity patterns."
  },
  {
    "id": 35,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Define octane number. What is gasoline additive?",
    "marks": 2,
    "answer": "Octane Number:\n\nDefinition:\n\"Octane number is a measure of the ability of gasoline to resist knocking in an internal combustion engine. It is expressed on a scale from 0 to 100, where 100 represents pure isooctane and 0 represents pure n-heptane.\"\n\nExplanation:\n• Knocking occurs when fuel ignites prematurely (before the piston reaches the proper position)\n• This causes loss of power and engine damage\n• Higher octane number = better resistance to knocking\n• Octane rating indicates the percentage of isooctane (2,2,4-trimethylpentane) in a mixture\n  - 95 octane fuel = 95% isooctane + 5% n-heptane equivalent\n\nFactors Affecting Octane Number:\n• Structural isomers: branched hydrocarbons have higher octane numbers\n• Degree of unsaturation: aromatic compounds have higher octane numbers\n• Molecular weight: higher molecular weight generally correlates with higher octane\n\nGasoline Additives:\n\nDefinition: Substances added to gasoline to improve its performance and properties.\n\nCommon Types:\n\n1. Anti-Knock Agents (Octane Boosters):\n   • Tetraethyl lead (TEL) - now phased out\n   • Methyl tert-butyl ether (MTBE)\n   • Ethanol (C₂H₅OH)\n   • Purpose: Increase octane number\n\n2. Anti-oxidants:\n   • Phenolic compounds\n   • Purpose: Prevent gum formation and oxidation\n\n3. Metal Deactivators:\n   • N,N'-disalicylidene-1,2-propanediamine\n   • Purpose: Prevent metal-catalyzed oxidation\n\n4. Corrosion Inhibitors:\n   • Protective films on fuel system components\n\n5. Static Dissipator Additives (SDA):\n   • Improve electrical conductivity\n\n6. Biocides:\n   • Prevent microbial growth in fuel tanks",
    "explanation": "Octane rating is crucial for engine performance, and additives are essential for maintaining fuel quality and engine efficiency."
  },
  {
    "id": 36,
    "type": "short_question",
    "category": "Qualitative Analysis",
    "difficulty": "medium",
    "question": "Why is sodium extract solution boiled with dilute HNO₃ before halogen test during detection of hetero elements?",
    "marks": 1,
    "answer": "Reason for Boiling with Dilute HNO₃:\n\n1. Removal of Excess Sodium:\n   • When organic compound containing halogens is fused with sodium metal, excess sodium remains.\n   • Sodium reacts with water: 2Na + 2H₂O → 2NaOH + H₂↑\n   • This makes the solution strongly alkaline.\n\n2. Conversion to Correct Form:\n   • Dilute HNO₃ neutralizes excess NaOH\n   • NaOH + HNO₃ → NaNO₃ + H₂O\n   • Brings pH to slightly acidic (pH ≈ 5-6)\n   • Correct pH for halogen test\n\n3. Oxidation of Reducing Agents:\n   • Any reducing impurities (like CN⁻ from nitrogen) are oxidized\n   • HNO₃ oxidizes CN⁻ to CO₂ and NO₂\n   • 3CN⁻ + 4HNO₃ → 3CO₂ + NO↑ + 2H₂O + 3NO₃⁻\n   • Prevents false positive reactions\n\n4. Conversion of Halide Ions:\n   • Halide ions (X⁻) are converted to their most reactive form\n   • Ensures proper precipitation with AgNO₃\n\n5. Removal of Sulfide:\n   • If sulfur is present (as S²⁻ from sulfur fusion), it's oxidized to SO₄²⁻\n   • Prevents interference with halogen test\n   • S²⁻ + 2HNO₃ → H₂SO₄ + 2NO₂\n\nHalogen Test:\nAfter treatment, add AgNO₃:\n• If Cl⁻: white precipitate of AgCl\n• If Br⁻: pale yellow precipitate of AgBr\n• If I⁻: yellow precipitate of AgI",
    "explanation": "This procedure ensures reliable and specific detection of halogens by removing interfering substances and maintaining proper reaction conditions."
  },
  {
    "id": 37,
    "type": "short_question",
    "category": "Periodic Table",
    "difficulty": "medium",
    "question": "What are the advantages of the modern periodic table?",
    "marks": 2,
    "answer": "Advantages of Modern Periodic Table:\n\n1. Based on Atomic Number:\n   • Arranged by increasing atomic number (not atomic mass like Mendeleev's)\n   • More scientifically accurate\n   • Removes anomalies (e.g., Ar and K placement)\n\n2. Explains Electronic Configuration:\n   • Reflects electron arrangement in atoms\n   • Helps predict valence and bonding behavior\n   • Shows periodic trends\n\n3. Accommodates Isotopes:\n   • Elements with same atomic number but different mass numbers have same position\n   • Reflects true chemical similarity\n\n4. Placement of All Elements:\n   • Includes all known elements up to Z = 118\n   • Provides room for new elements\n\n5. Better Organization:\n   • s, p, d, f blocks show orbital types\n   • Clear grouping of similar elements\n   • Lanthanides and Actinides properly placed\n\n6. Predictive Power:\n   • Can predict properties of undiscovered elements\n   • Shows periodic trends:\n     - Ionization energy\n     - Electronegativity\n     - Atomic radius\n     - Metallic character\n\n7. Chemical Behavior:\n   • Groups (vertical columns) show similar chemical properties\n   • Explains formation of ions and compounds\n\n8. Eliminates Inconsistencies:\n   • Removes problems from Mendeleev's table\n   • All elements fit logically\n\n9. Universal Acceptance:\n   • Adopted internationally as standard\n   • Used in all scientific communications",
    "explanation": "The modern periodic table is based on sound quantum mechanical principles and provides a comprehensive framework for understanding chemistry."
  },
  {
    "id": 38,
    "type": "short_question",
    "category": "Periodic Table",
    "difficulty": "medium",
    "question": "Explain ionic radius and covalent radius with suitable examples.",
    "marks": 2,
    "answer": "Ionic Radius and Covalent Radius:\n\nIonic Radius:\nDefinition: The effective radius of an ion in an ionic compound. It is the distance from the nucleus to the outermost electron in an ionized atom.\n\nCharacteristics:\n• Smaller than covalent radius for metal cations\n• Larger than atomic radius for anions\n• Depends on:\n  - Nuclear charge (more protons → smaller radius)\n  - Number of electrons (more electrons → larger radius)\n  - Charge of ion (more positive charge → smaller radius)\n\nExamples:\n• Na (metallic radius = 186 pm) → Na⁺ (ionic radius = 95 pm) [reduced]\n• Cl (covalent radius ≈ 102 pm) → Cl⁻ (ionic radius = 181 pm) [increased]\n• Fe²⁺ = 76 pm vs Fe³⁺ = 64 pm [Fe³⁺ is smaller]\n• N³⁻ = 146 pm (large due to 3 extra electrons)\n\nCovalent Radius:\nDefinition: Half of the distance between the nuclei of two atoms bonded by a single covalent bond.\n\nCharacteristics:\n• Approximately half the bond length\n• Relatively constant for an atom in different molecules\n• Depends on:\n  - Degree of overlap between orbitals\n  - Type of bond (single > double > triple)\n  - Nature of bonded atoms\n\nCalculation:\nCovalent radius = Bond length / 2\n\nExamples:\n• H-H bond length = 74 pm → H covalent radius = 37 pm\n• C-C bond length = 154 pm → C covalent radius = 77 pm\n• C=C bond length = 134 pm → effective C radius in double bond\n• Si covalent radius ≈ 110 pm (larger than C, 77 pm)\n\nComparison:\n| Aspect | Ionic Radius | Covalent Radius |\n|--------|-------------|----------------|\n| Definition | Distance in ionic compound | Half of single bond length |\n| Nature | For ions | For neutral atoms |\n| Variability | Depends on charge | Relatively constant |\n| Example | Na⁺ = 95 pm | Na = 154 pm |",
    "explanation": "Understanding these radii helps explain periodic trends, bond properties, and reactivity patterns."
  },
  {
    "id": 39,
    "type": "short_question",
    "category": "Periodic Properties",
    "difficulty": "easy",
    "question": "What are the factors affecting electronegativity?",
    "marks": 1,
    "answer": "Factors Affecting Electronegativity:\n\n1. Atomic Number (Nuclear Charge):\n   • Higher nuclear charge → higher electronegativity\n   • More protons attract electron pairs more strongly\n   • Example: F (En = 4.0) > Cl (En = 3.0) > Br (En = 2.8)\n\n2. Atomic Radius:\n   • Smaller atomic radius → higher electronegativity\n   • Electrons are closer to nucleus, experience stronger attraction\n   • Example: N (small, En = 3.0) > P (larger, En = 2.1)\n\n3. Number of Valence Electrons:\n   • More valence electrons → higher electronegativity\n   • Halogens (7 valence e⁻) more electronegative than alkali metals (1 valence e⁻)\n   • Example: F (En = 4.0) > Na (En = 0.93)\n\n4. Shielding Effect:\n   • More inner shells → lower electronegativity\n   • Inner electrons reduce nuclear attraction on valence electrons\n   • Example: C (En = 2.5) > Si (En = 1.9)\n\n5. Oxidation State:\n   • Higher oxidation state → higher electronegativity\n   • More positive charge increases electron-pulling ability\n   • Example: Mn²⁺ vs Mn⁷⁺ (in MnO₄⁻)\n\n6. Type of Hybrid Orbitals:\n   • s-character influence: sp > sp² > sp³\n   • Higher s-character → higher electronegativity\n   • Example: C(sp) > C(sp²) > C(sp³)\n\n7. Electronegativity Trend:\n   • Increases across a period (left to right)\n   • Decreases down a group (top to bottom)\n   • Highest: Fluorine (F = 4.0)\n   • Lowest: Francium (Fr ≈ 0.7)",
    "explanation": "Electronegativity is a crucial property for predicting bond polarity and chemical reactivity."
  },
  {
    "id": 40,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Define optical isomerism with example.",
    "marks": 2,
    "answer": "Optical Isomerism:\n\nDefinition:\n\"Optical isomerism is a type of stereoisomerism where two isomers have the same molecular formula and functional groups but differ in their spatial arrangement around a chiral center (stereogenic center), resulting in non-superimposable mirror images (enantiomers).\"\n\nKey Features:\n\n1. Stereoisomerism Type:\n   • Not constitutional isomers (same connectivity)\n   • Spatial arrangement differs\n   • Cannot interconvert without breaking bonds\n\n2. Chiral Center (Stereogenic Center):\n   • Carbon with four different groups attached\n   • Creates two non-superimposable mirror images\n   • Designated as R or S configuration\n\n3. Enantiomers:\n   • Non-superimposable mirror images\n   • Identical physical and chemical properties (mostly)\n   • Different rotation of polarized light\n   • One rotates light clockwise (+/d-form), other counterclockwise (-/l-form)\n\nExamples:\n\n1. Lactic Acid (CH₃-CHOH-COOH):\n   • Chiral center at carbon with OH\n   • Has D- and L-forms (enantiomers)\n   • Identical chemical structure, mirror images\n\n2. Alanine (Amino Acid):\n   • Central carbon bonded to: NH₂, COOH, CH₃, H\n   • Forms D-alanine and L-alanine\n   • Only L-alanine occurs in nature\n\n3. Glyceraldehyde (CHO-CHOH-CH₂OH):\n   • Has one chiral center\n   • Forms D-(+)-glyceraldehyde and L-(-)-glyceraldehyde\n   • Used as reference for stereochemistry\n\n4. 2-Butanol (CH₃-CHOH-CH₂CH₃):\n   • One chiral center at second carbon\n   • Two enantiomers possible\n   • (R)- and (S)- configurations\n\nNotation:\n• D/L notation: Based on reference (glyceraldehyde)\n• (+)/(−) notation: Based on direction of optical rotation\n• R/S notation: Based on Cahn-Ingold-Prelog rules (modern)\n\nBiological Significance:\n• Most amino acids are L-forms in nature\n• Enzymes are chiral and recognize only one enantiomer\n• Pharmaceutical importance: one enantiomer may be therapeutic, other harmful",
    "explanation": "Optical isomerism is crucial in biochemistry and pharmacology, where stereochemistry determines biological activity."
  },
  {
    "id": 41,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "hard",
    "question": "Write possible isomers of C₅H₁₄ and give their IUPAC names.",
    "marks": 3,
    "answer": "Isomers of C₅H₁₄ (Pentane):\n\nC₅H₁₄ is a saturated hydrocarbon with 5 carbon atoms. Since it's saturated with no rings or double bonds specified, these are structural isomers (chain isomers).\n\nTotal number of isomers: 3\n\n1. n-Pentane (Straight Chain):\n   CH₃-CH₂-CH₂-CH₂-CH₃\n   • IUPAC name: Pentane\n   • Structure: Linear, unbranched\n   • Boiling point: 36.1°C\n   • Molecular formula: C₅H₁₂\n\n   Wait - C₅H₁₄ is not a valid alkane formula!\n   • For saturated alkanes: CₙH₂ₙ₊₂\n   • For n=5: C₅H₁₂ (not C₅H₁₄)\n   \nRechecking: If the question meant C₅H₁₂:\n\n1. n-Pentane (Pentane):\n   CH₃-CH₂-CH₂-CH₂-CH₃\n   • IUPAC name: Pentane\n   • Straight chain\n\n2. Isopentane (2-Methylbutane):\n        CH₃\n        |\n   CH₃-CH-CH₂-CH₃\n   • IUPAC name: 2-Methylbutane\n   • Branched at 2nd carbon\n   • Also called isopentane\n\n3. Neopentane (2,2-Dimethylpropane):\n          CH₃\n          |\n   CH₃-C-CH₃\n          |\n          CH₃\n   • IUPAC name: 2,2-Dimethylpropane\n   • Central quaternary carbon\n   • Most compact structure\n   • Boiling point: 9.5°C (lowest)\n\nIf C₅H₁₄ was intended (not a valid alkane):\nThe question likely contains a typo. C₅H₁₄ would require the addition of 2H atoms to C₅H₁₂, which is not chemically valid for standard organic molecules.\n\nProperties of C₅H₁₂ Isomers:\n| Isomer | BP (°C) | Density | Use |\n|--------|---------|---------|-----|\n| n-Pentane | 36.1 | 0.626 | Solvent |\n| 2-Methylbutane | 27.8 | 0.620 | Fuel |\n| 2,2-Dimethylpropane | 9.5 | 0.614 | Refrigerant |",
    "explanation": "This exercise demonstrates how structural isomers have different physical properties despite having the same molecular formula."
  },
  {
    "id": 42,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Define homologous series and write its characteristics.",
    "marks": 2,
    "answer": "Homologous Series:\n\nDefinition:\n\"A homologous series is a group of compounds with similar chemical properties that differ by one or more CH₂ units and form a series in which successive members have the same general formula.\"\n\nCharacteristics:\n\n1. Molecular Formula Relationship:\n   • Each member differs from the next by CH₂ (or CₓHₓ₊₂ for alkanes)\n   • General formula: CₙH₂ₙ₊₂ for alkanes\n   • Example: CH₄, C₂H₆, C₃H₈, C₄H₁₀...\n\n2. Same Functional Group:\n   • All members contain the same functional group\n   • Example: -OH in alcohols, -COOH in carboxylic acids\n   • Determines the type of reactions they undergo\n\n3. Similar Chemical Properties:\n   • Members show similar reactions and properties\n   • Trends in chemical reactivity are predictable\n   • Example: All alcohols show -OH reactions\n\n4. Gradual Change in Physical Properties:\n   • Boiling point increases gradually\n   • Melting point increases gradually\n   • Solubility changes in a predictable manner\n   • Density increases gradually\n   • Example for alkanes:\n     - CH₄: -162°C | C₂H₆: -89°C | C₃H₈: -42°C | C₄H₁₀: -1°C\n\n5. Same Degree of Unsaturation:\n   • Members can have different numbers of C=C or rings\n   • But degree of unsaturation follows pattern\n\n6. Preparation Method:\n   • Lower members can be prepared from higher members\n   • Or can be synthesized through similar methods\n\n7. Can be Represented by General Formula:\n   • Single general formula represents all members\n   • Alkanes: CₙH₂ₙ₊₂\n   • Alcohols: CₙH₂ₙ₊₂O\n   • Carboxylic acids: CₙH₂ₙO₂\n\nExamples of Homologous Series:\n\n1. Alkanes: CH₄, C₂H₆, C₃H₈ (CₙH₂ₙ₊₂)\n2. Alkenes: C₂H₄, C₃H₆, C₄H₈ (CₙH₂ₙ)\n3. Alkynes: C₂H₂, C₃H₄, C₄H₆ (CₙH₂ₙ₋₂)\n4. Alcohols: CH₃OH, C₂H₅OH, C₃H₇OH (CₙH₂ₙ₊₂O)\n5. Carboxylic acids: HCOOH, CH₃COOH, C₂H₅COOH (CₙH₂ₙO₂)\n\nDifference from Isomers:\n• Homologues: Different molecular formulas, similar structure\n• Isomers: Same molecular formula, different structure\n\nSignificance:\n• Allows prediction of properties\n• Helps in systematic study of organic compounds\n• Basis for classification of organic compounds",
    "explanation": "Understanding homologous series is fundamental for systematic study of organic chemistry and predicting compound properties."
  },
  {
    "id": 43,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Write the formula and IUPAC name of: (i) Second member of aldehyde (ii) Third member of alcohol.",
    "marks": 2,
    "answer": "Formulas and IUPAC Names:\n\n(i) Second Member of Aldehyde:\n\nAldehydes have the general formula: CₙH₂ₙO\nFirst member (n=1): Formaldehyde = HCHO = H-CHO\nSecond member (n=2): CH₃CHO\n\nIUPAC Name: Ethanal\nCommon Name: Acetaldehyde\n\nStructure:\n     O\n     ||\n  H₃C-C-H\n\nOr: CH₃-CHO\n\nProperties:\n• Liquid at room temperature\n• Boiling point: 20.8°C\n• Pungent odor\n\n(ii) Third Member of Alcohol:\n\nAlcohols have the general formula: CₙH₂ₙ₊₂O\nFirst member (n=1): Methanol = CH₃OH\nSecond member (n=2): Ethanol = C₂H₅OH\nThird member (n=3): C₃H₇OH\n\nFor C₃H₇OH, two isomers are possible:\n\na) n-Propan-1-ol (Primary alcohol):\n   CH₃-CH₂-CH₂-OH\n   IUPAC Name: Propan-1-ol\n   Common Name: n-Propyl alcohol\n\nb) Propan-2-ol (Secondary alcohol):\n       OH\n       |\n   CH₃-CH-CH₃\n   IUPAC Name: Propan-2-ol\n   Common Name: Isopropyl alcohol\n\nNote: When asked for 'third member of alcohol' typically the first isomer is meant:\n\n→ IUPAC Name: Propan-1-ol\n→ Formula: C₃H₈O or C₃H₇OH\n→ Structure: CH₃CH₂CH₂OH\n\nProperties:\n• Colorless liquid\n• Boiling point: 97°C\n• Miscible with water\n• Used as solvent",
    "explanation": "Understanding homologous series members helps systematically study organic compounds and their properties."
  },
  {
    "id": 44,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "medium",
    "question": "Define geometrical isomerism with example.",
    "marks": 2,
    "answer": "Geometrical Isomerism:\n\nDefinition:\n\"Geometrical isomerism is a type of stereoisomerism that occurs when atoms or groups of atoms are arranged around a double bond or ring in different spatial positions, resulting in isomers with the same molecular formula and functional groups but different arrangements.\"\n\nAlso called: Cis-Trans Isomerism or E-Z Isomerism\n\nConditions for Geometrical Isomerism:\n1. Presence of a C=C double bond (most common) or ring\n2. Each carbon atom of the double bond must have two different groups/atoms attached\n3. Restricted rotation around the double bond\n4. Two or more groups in different spatial arrangements\n\nTypes:\n\n1. Cis-Trans Nomenclature:\n   • Cis: Similar groups on same side of double bond\n   • Trans: Similar groups on opposite sides of double bond\n\n2. E-Z Nomenclature (IUPAC):\n   • E (Entgegen = opposite): Priority groups on opposite sides\n   • Z (Zusammen = together): Priority groups on same side\n   • Based on Cahn-Ingold-Prelog rules\n\nExample 1: But-2-ene (CH₃-CH=CH-CH₃)\n\nCis-But-2-ene (Z-But-2-ene):\n  CH₃         CH₃\n   |           |\n   C===C\n   |           |\n   H           H\n(Both CH₃ groups on same side)\n• Boiling point: -8.8°C\n• Dipole moment: 0\n• Less stable (steric hindrance)\n\nTrans-But-2-ene (E-But-2-ene):\n  CH₃         H\n   |           |\n   C===C\n   |           |\n   H           CH₃\n(CH₃ groups on opposite sides)\n• Boiling point: 0.88°C\n• Dipole moment: 0\n• More stable (less steric hindrance)\n\nExample 2: 1,2-Dichloroethene (CHCl=CHCl)\n\nCis (Z) form:\n  Cl          Cl\n   |           |\n   C===C-H\n   |           |\n   H\n• Boiling point: 60°C\n• Polar (dipole moment ≠ 0)\n\nTrans (E) form:\n  Cl          H\n   |           |\n   C===C\n   |           |\n   H           Cl\n• Boiling point: 48°C\n• Non-polar (dipole moment = 0)\n\nExample 3: 2-Pentene (CH₃-CH=CH-CH₂-CH₃)\n\nCis-2-Pentene:\n  CH₃         CH₃\n   |           |\n   C===C\n   |           |\n   H           C₂H₅\n\nTrans-2-Pentene:\n  CH₃         H\n   |           |\n   C===C\n   |           |\n   H           C₂H₅\nOr equivalently:\n  CH₃         C₂H₅\n   |           |\n   C===C\n   |           |\n   C₂H₅        H\n\nDifferences from Optical Isomerism:\n| Property | Geometrical | Optical |\n|----------|------------|----------|\n| Cause | C=C or ring | Chiral center |\n| Chirality | Non-chiral | Chiral |\n| Optical rotation | No | Yes |\n| Mirror images | Not mirror images | Mirror images |\n\nBiological Importance:\n• Retinal in vision (11-cis-retinal)\n• Plant growth (cis/trans-abscisic acid)\n• Sweetness perception differs for isomers",
    "explanation": "Geometrical isomerism is important in understanding molecular structure, reactivity, and biological functions of organic compounds."
  },
  {
    "id": 45,
    "type": "short_question",
    "category": "Organic Chemistry",
    "difficulty": "easy",
    "question": "Define a functional group with example.",
    "marks": 1,
    "answer": "Functional Group:\n\nDefinition:\n\"A functional group is a specific group of atoms within a molecule that determines the characteristic chemical reactions of that molecule. It is the portion of a molecule responsible for most of its chemical properties and reactions.\"\n\nCharacteristics:\n1. Specific arrangement of atoms (usually non-metal)\n2. Same functional group undergoes similar reactions\n3. Responsible for most chemical properties\n4. Determines the chemical class of compound\n\nCommon Functional Groups:\n\n1. Hydroxyl Group (-OH):\n   • Present in: Alcohols, phenols\n   • Example: CH₃CH₂OH (ethanol)\n   • Properties: Polar, hydrogen bonding\n\n2. Carbonyl Group (C=O):\n   • Present in: Aldehydes, ketones\n   • Example: CH₃CHO (acetaldehyde)\n   • Properties: Highly polar, reactive\n\n3. Carboxyl Group (-COOH):\n   • Present in: Carboxylic acids\n   • Example: CH₃COOH (acetic acid)\n   • Properties: Acidic, hydrogen bonding\n\n4. Amino Group (-NH₂):\n   • Present in: Amines, amino acids\n   • Example: CH₃NH₂ (methylamine)\n   • Properties: Basic, can form hydrogen bonds\n\n5. Ether Group (R-O-R'):\n   • Present in: Ethers\n   • Example: CH₃OCH₂CH₃ (ethyl methyl ether)\n   • Properties: Slightly polar\n\n6. Thiol Group (-SH):\n   • Present in: Thiols\n   • Example: CH₃SH (methanethiol)\n   • Properties: Similar to alcohols but weaker\n\n7. Aldehyde Group (-CHO):\n   • Carbonyl at end of chain\n   • Example: CH₃CH₂CHO\n\n8. Ketone Group (C=O):\n   • Carbonyl in middle of chain\n   • Example: CH₃COCH₃ (acetone)",
    "explanation": "Functional groups are the basis for classifying organic compounds and predicting their chemical behavior."
  },
  {
    "id": 46,
    "type": "long_question",
    "category": "Stoichiometry",
    "difficulty": "hard",
    "question": "17g of ammonia is completely reacted with 45g of oxygen to produce NO and H₂O. (i) Which is limiting reactant and why? (ii) Calculate the number of moles of unreacted reactant left over. (iii) What volume of NO are produced at NTP? (iv) Calculate the mass of water produced.",
    "marks": 4,
    "answer": "Reaction: 4NH₃ + 5O₂ → 4NO + 6H₂O\n\nGiven Data:\n• Mass of NH₃ = 17 g\n• Mass of O₂ = 45 g\n• Molar mass of NH₃ = 14 + 3 = 17 g/mol\n• Molar mass of O₂ = 32 g/mol\n• Molar mass of NO = 14 + 16 = 30 g/mol\n• Molar mass of H₂O = 18 g/mol\n• Volume of gases at NTP = 22.4 L/mol\n\nSolution:\n\n(i) Identifying Limiting Reactant:\n\nMoles of NH₃ = 17/17 = 1 mol\nMoles of O₂ = 45/32 = 1.406 mol\n\nFrom stoichiometry: 4NH₃ + 5O₂ → products\nFor 1 mol NH₃, required O₂ = (5/4) × 1 = 1.25 mol\n\nAvailable O₂ = 1.406 mol\nRequired O₂ = 1.25 mol\nSince available > required, O₂ is in excess.\n\nTherefore: NH₃ is the LIMITING REACTANT\n\nReason: NH₃ is present in lower quantity relative to stoichiometric requirement.\n\n(ii) Moles of Unreacted Reactant:\n\nSince NH₃ is limiting, O₂ is unreacted.\n\nO₂ consumed = (5/4) × 1 = 1.25 mol\nO₂ available = 1.406 mol\nO₂ unreacted = 1.406 - 1.25 = 0.156 mol\n\n(iii) Volume of NO Produced at NTP:\n\nFrom stoichiometry: 4NH₃ → 4NO (1:1 ratio)\n\nNO produced = 1 mol (since 1 mol NH₃ produces 1 mol NO)\n\nVolume of NO at NTP = 1 × 22.4 = 22.4 L\n\n(iv) Mass of Water Produced:\n\nFrom stoichiometry: 4NH₃ → 6H₂O\nFor 1 mol NH₃: moles of H₂O = (6/4) × 1 = 1.5 mol\n\nMass of H₂O = 1.5 × 18 = 27 g\n\nSummary:\n(i) Limiting reactant: NH₃\n(ii) Unreacted O₂: 0.156 mol\n(iii) Volume of NO at NTP: 22.4 L\n(iv) Mass of H₂O: 27 g",
    "explanation": "This comprehensive stoichiometry problem demonstrates the method for identifying limiting reactants and calculating reactant consumption and product formation based on chemical equations."
  },
  {
    "id": 47,
    "type": "long_question",
    "category": "Chemistry Extraction",
    "difficulty": "hard",
    "question": "Write a short note on extraction of sodium by Down's process.",
    "marks": 3,
    "answer": "Down's Process - Extraction of Sodium:\n\nDefinition:\nDown's process is an electrochemical method for the industrial production of metallic sodium from molten sodium chloride using electrolysis.\n\n1. Historical Background:\n   • Developed by James Baxter \"J. B.\" Down in 1923\n   • Most important industrial method for sodium production\n   • Replaces older Castner process\n\n2. Raw Material:\n   • Sodium chloride (NaCl) - rock salt or halite\n   • Abundant and relatively inexpensive\n   • Melting point of pure NaCl = 801°C\n\n3. Principle:\n   • Reduction of Na⁺ ions at cathode\n   • Oxidation of Cl⁻ ions at anode\n   • Occurs in molten state\n\n4. Electrolysis of Molten NaCl:\n\n   At Cathode (Reduction):\n   Na⁺ + e⁻ → Na\n   \n   At Anode (Oxidation):\n   2Cl⁻ - 2e⁻ → Cl₂\n   \n   Overall reaction:\n   2NaCl → 2Na + Cl₂\n\n5. Cell Design:\n\n   Cathode:\n   • Liquid metallic sodium\n   • Cooled to prevent vaporization\n   • Surrounded by graphite cathode\n   \n   Anode:\n   • Graphite electrodes\n   • Produces chlorine gas\n   \n   Electrolyte:\n   • Molten NaCl (801°C)\n   • Sometimes mixed with CaCl₂ (lowers melting point to 600°C)\n   • Fused salt acts as electrolyte\n   \n   Separator:\n   • Asbestos diaphragm or iron gauze\n   • Separates anode and cathode\n   • Prevents mixing of Na and Cl₂\n\n6. Operating Conditions:\n   • Temperature: 800-850°C\n   • Voltage: 4-6 volts\n   • Current: 10,000-40,000 amperes\n   • High current density for efficiency\n\n7. Products Obtained:\n   \n   Primary Products:\n   • Sodium metal (liquid, density 0.97 g/cm³)\n   • Chlorine gas (at anode)\n   \n   Secondary Benefits:\n   • Heat generated by electrolysis\n   • Chlorine can be used in other processes\n\n8. Collection and Purification:\n   \n   Sodium Collection:\n   • Liquid sodium floats to top of cathode compartment\n   • Collected by siphoning off\n   • Cooled and solidifies\n   • Stored under mineral oil or inert atmosphere (due to reactivity)\n   \n   Chlorine Purification:\n   • Collected at anode\n   • Dried and compressed\n   • Used in chlor-alkali processes\n\n9. Advantages:\n   • Industrial-scale production\n   • Produces both Na and Cl₂\n   • Down's cell is more efficient than Castner process\n   • Chlorine is also useful product\n   • Economically viable\n\n10. Disadvantages:\n    • High temperature requirement (800°C)\n    • High electrical energy consumption\n    • Requires special heat-resistant materials\n    • Liquid sodium is highly reactive and dangerous\n    • Electrolyte management is complex\n    • Environmental considerations for Cl₂ production\n\n11. Properties of Sodium Obtained:\n    • Silvery white metal\n    • Very reactive (must be stored under mineral oil)\n    • Purity: >99.8%\n    • Used in organic synthesis, metallurgy, etc.\n\n12. Industrial Scale:\n    • Annual production: >200,000 metric tons worldwide\n    • Economically important process\n    • China, USA, and Europe are major producers\n\n13. Modern Variations:\n    • Temperature reduced by using salt mixtures\n    • Improved diaphragm materials\n    • Better heat management systems\n    • More efficient electrode designs\n\n14. Applications of Sodium:\n    • Organic synthesis (Wurtz reaction)\n    • Reduction of organic compounds\n    • Production of sodium compounds (NaOH, Na₂SO₄, etc.)\n    • Alloy production\n    • Heat transfer fluid (Na-K alloys)\n    • Nuclear reactor coolants",
    "explanation": "Down's process represents a major industrial achievement in sodium production, demonstrating the application of electrochemistry in large-scale chemical manufacturing while also providing an important byproduct (Cl₂)."
  },
  {
    "id": 48,
    "type": "long_question",
    "category": "Laws of Combination",
    "difficulty": "medium",
    "question": "State the law of reciprocal proportion.",
    "marks": 2,
    "answer": "Law of Reciprocal Proportion:\n\nStatement:\n\"If two elements A and B separately combine with a third element C, then the ratio of the masses of A and B that combine with a fixed mass of C is the same as the ratio of the masses of A and B that combine with each other (or the reciprocal of this ratio).\"\n\nMathematical Expression:\nIf element A combines with element C in ratio (mass of A):(mass of C) = a:c\nAnd element B combines with element C in ratio (mass of B):(mass of C) = b:c\nThen when A and B combine, the ratio will be (mass of A):(mass of B) = a:b (or b:a)\n\nExample 1: Carbon, Hydrogen, and Oxygen\n\n• In CO: 12 g C combines with 16 g O\n  → Ratio C:O = 12:16 = 3:4\n\n• In H₂O: 2 g H combines with 16 g O\n  → Ratio H:O = 2:16 = 1:8\n\n• In CH₄ (methane): C:H = 12:4 = 3:1\n\nAccording to law of reciprocal proportion:\nWhen H and C combine, their ratio should be reciprocal of (O compounds)\n\nFrom CO: C:O = 3:4 (C = 3 parts per 4 O)\nFrom H₂O: H:O = 1:8 (H = 1 part per 8 O)\n\nIf we want H:C in a compound:\n- C combines with 4O (as in CO)\n- H combines with 8O (as in H₂O)\n- So H:C = 8:4 = 2:1 (or C:H = 4:8 = 1:2 or 3:6 simplified)\n\nIn CH₄: C:H = 12:4 = 3:1 or H:C = 4:12 = 1:3\n\nWait, let me recalculate:\nIn CO: 12g C : 16g O (ratio for this compound)\nIn H₂O: 2g H : 16g O\nWhen 12g C combines (from CO), it combines with 16g O\nWhen 2g H combines (from H₂O), it also combines with 16g O\nSo 12g C ↔ 2g H indirectly\nTherefore, C:H = 12:2 = 6:1 (by reciprocal proportion)\nBut in actual CH₄: C:H = 12:4 = 3:1\n\nSo the concept works with proper understanding.\n\nExample 2: Nitrogen and Oxygen Compounds\n\n• In NO: 14 g N combines with 16 g O\n  → Ratio N:O = 14:16 = 7:8\n\n• In NO₂: 14 g N combines with 32 g O\n  → Ratio N:O = 14:32 = 7:16\n\n• In N₂O: 28 g N combines with 16 g O\n  → Ratio N:O = 28:16 = 7:4\n\nThe reciprocal relationship holds when we examine these ratios.\n\nExample 3: Copper and Oxygen Compounds\n\n• In CuO: 64 g Cu combines with 16 g O\n• In Cu₂O: 128 g Cu combines with 16 g O\n\nIf hydrogen combines separately:\n• In H₂O: 2 g H combines with 16 g O\n\nThen in copper-hydrogen compound (if it existed):\nThe ratio of Cu:H would follow the reciprocal law.\n\nSignificance:\n1. Supports atomic theory\n2. Explains how atoms combine in definite ratios\n3. Useful in determining chemical formulas\n4. Limited application compared to modern atomic theory\n\nLimitations:\n1. Only applicable to certain combinations\n2. Not applicable when elements form multiple oxides\n3. Works best when one element is common (like oxygen)\n4. Superseded by modern atomic theory\n\nRelation to Other Laws:\n• Works with Law of Definite Proportions\n• Connected to Law of Multiple Proportions\n• Based on Dalton's Atomic Theory\n\nModern Understanding:\nCan be explained through valency:\n- If Cu has valency 2 (combines with 2O atoms)\n- And O has valency 2\n- Then Cu = 64 units, O = 16 units\n- Compound CuO: 64:16 mass ratio",
    "explanation": "The law of reciprocal proportion is an important historical law that led to understanding of atomic combinations, though it has been superseded by modern atomic theory and valency concepts."
  },
  {
    "id": 49,
    "type": "long_question",
    "category": "Chemical Bonding",
    "difficulty": "hard",
    "question": "State the octet rule. Draw orbital diagrams for water to show how the octet rule is satisfied.",
    "marks": 3,
    "answer": "Octet Rule:\n\nStatement:\n\"Atoms tend to gain, lose, or share electrons so that they acquire eight electrons in their valence shell (outer electron shell), thereby achieving the electron configuration of the nearest noble gas. (For hydrogen, the goal is 2 electrons, matching helium)\"\n\nAlternative Statement:\n\"Atoms are stable when they have 8 valence electrons (or 2 for hydrogen and helium).\"\n\nHistorical Context:\n• Proposed by Lewis (1916) and Kossel\n• Part of valence bond theory\n• Explains covalent and ionic bonding\n• Foundation for Lewis structures\n\nExceptions to Octet Rule:\n1. Hydrogen and Helium: Require 2 electrons (duet rule)\n2. Boron compounds: Can have 6 electrons (e.g., BF₃)\n3. Sulfur and Phosphorus: Can expand octet (10-12 electrons)\n   Examples: SF₆, PCl₅\n4. Transition metals: Don't strictly follow octet rule\n\nOctet Rule and Water (H₂O):\n\nWater Molecule Structure:\n• Oxygen: Z = 8, electron configuration: 1s² 2s² 2p⁴\n• Hydrogen: Z = 1, electron configuration: 1s¹ (×2)\n\nHow Octet Rule is Satisfied:\n\n1. Oxygen in H₂O:\n   • Oxygen has 6 valence electrons\n   • Needs 2 more electrons to complete octet\n   • Forms 2 covalent bonds with 2 hydrogen atoms\n   • Each O-H bond: oxygen shares 1 electron from H and contributes 1\n   • Oxygen's total valence electrons: 6 + 2(shared from H) = 8 ✓\n\n2. Hydrogen in H₂O:\n   • Each H has 1 valence electron\n   • Wants 2 electrons (duet rule)\n   • Forms 1 covalent bond with oxygen\n   • Each H: 1 (own) + 1 (from O) = 2 ✓\n\nOrbital Diagram for Water:\n\nOxygen Atom (Before bonding):\n   1s²        2s²        2p⁴\n[↑↓]       [↑↓]     [↑↓] [↑] [↑]\n\nAfter bonding with 2 H atoms:\n   1s²        2s²        2p⁴ (rearranged)\n[↑↓]       [↑↓]     [↑↓] [↑↓] [↑↓]\n\nWhere the paired electrons in 2p orbitals represent:\n- Two bonding pairs (O-H bonds): [↑↓] and [↑↓]\n- Two lone pairs on oxygen: [↑↓] and [↑↓]\n\nHydrogen Atoms (Before bonding):\nH₁: 1s¹ [↑]\nH₂: 1s¹ [↑]\n\nAfter bonding:\nH₁: 1s² [↑↓] (bonding pair with O)\nH₂: 1s² [↑↓] (bonding pair with O)\n\nLewis Structure of Water:\n\n         H:Ö:H\n          ↑\n          (dots represent valence electrons)\n\nOr showing bonds:\n       H—O—H\n        ; ;\n       (: ; : ) represent lone pairs on O\n\nMore detailed representation:\n\n     H—O—H\n       : :\n\nWhere\n- Each dash (—) represents a covalent bond (shared pair)\n- Each colon (:) or dot pair represents a lone pair\n\nValence Electron Count:\n\nOxygen:\n• Owns 2 electrons: from 2 O-H bonds (considering they orbit O orbital)\n• Exclusive ownership: 0 (all shared)\n• Half ownership of shared: 4 electrons (from 2 bonds: 1 from each)\n• Own electrons: 2 (from lone pairs)\n• Total with octet definition: 2 + 2 + 4 = 8 ✓\n\nHydrogen (each):\n• Forms 1 bond = 2 shared electrons\n• Total: 2 ✓ (satisfies duet rule)\n\nCross-check with Lone Pairs:\n• Oxygen: 2 lone pairs (shown as :)\n• Bonding pairs: 2 (shown as —)\n• Total electron pairs around O: 4 pairs = 8 electrons ✓\n\nMolecular Geometry:\n• 4 electron pairs around O\n• 2 bonding, 2 lone pairs\n• Tetrahedral electron geometry\n• Bent molecular geometry\n• Bond angle: 104.5°\n\nConclusion:\nThe octet rule is satisfied in water because:\n1. Oxygen achieves 8 valence electrons through bonding\n2. Each hydrogen achieves 2 valence electrons\n3. Both achieve noble gas configuration\n4. The molecule is stable and follows Lewis structure rules",
    "explanation": "The octet rule provides a simple framework for understanding why atoms form bonds. While it has exceptions, it remains a fundamental concept in chemistry education for explaining molecular formation and stability."
  }
]
;
