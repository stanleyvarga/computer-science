#include "../../mint/mint.h"
#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <math.h>

#define DEFAULT_CAPACITY 64

typedef int value_t;
typedef struct _vector *p_vector;
typedef struct _vector
{
	int capacity;
	int size;
	value_t *array;
} vector;

// void add_at(vector v, value_t number, int pos);
// void remove_at(vector v, value_t number, int pos);
// void pop();
// void get(vector v, int pos);
// void put(vector v, value_t number, int pos);
// void isEmpty();

p_vector newVector()
{
	p_vector v = malloc(sizeof(vector));
	if (v == NULL)
	{
		fprintf(stderr, "Not enough memory!");
		abort();
	}
	v->capacity = DEFAULT_CAPACITY;
	v->size = 0;
	v->array = malloc(sizeof(value_t) * v->capacity);
	if (v->array == NULL)
	{
		fprintf(stderr, "Not enough memory!");
		abort();
	}

	return v;
}

int size(p_vector v)
{
	return v->size;
}

void destroyVector(p_vector v)
{
	free(v);
	free(v->array);
}

void doubleVectorCapacity(p_vector v)
{
	assert(v);
	printf("TEST ");

	int tmp[v->size];
	for (int i = 0; i < v->size; i++)
	{
		tmp[i] = v->array[i];
	}

	if (v->array != NULL)
	{

		free(v->array);
	}
	v->array = tmp;

	// v->capacity = v->capacity * 2;
	// v->array = malloc(sizeof(value_t) * v->capacity);
	// // v->array = tmp;
	// if (v->array == NULL)
	// {
	// 	fprintf(stderr, "Not enough memory!");
	// 	abort();
	// }

	// for (int i = 0; i < v->size; i++)
	// {
	// 	v->array[i] = tmp[i];
	// }
}

/**
 * Current example size and capacity
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 * size=10 ----------------------]
 * capacity=30 -------------------------------------------------------------------------]
*/

/**
 * if capacity is 30 and we have size lower or equal 3 times  of that, we want to free some
 * memory and halve it
 * 
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, 0]
 * size=10 ----------------------]
 * capacity=15 ----------------------------------]
 */
void halveVectorCapacity(p_vector v)
{
	if (v->capacity <= DEFAULT_CAPACITY)
	{
		return;
	}

	int tmp[v->size];
	for (int i = 0; i < v->size; i++)
	{
		tmp[i] = v->array[i];
	}

	free(v->array);

	v->capacity = DEFAULT_CAPACITY / 2;
	v->array = malloc(sizeof(value_t) * v->capacity);
	if (v->array == NULL)
	{
		fprintf(stderr, "Not enough memory!");
		abort();
	}

	for (int i = 0; i < v->size; i++)
	{
		v->array[i] = tmp[i];
	}
}

void add(p_vector v, value_t val)
{
	if (v->size >= v->capacity)
	{
		printf("%d %d", v->size, v->capacity);
		doubleVectorCapacity(v);
	}

	v->array[v->size++] = val;
}

void pop(p_vector v)
{
	if (v->size >= 1)
	{
		v->size--;
	}

	// if (3 * v->size <= v->capacity)
	// {
	// 	printf("Yep");
	// 	halveVectorCapacity(v);
	// }
}

void print(p_vector v)
{
	printf("Printing Vector \n");
	for (int i = 0; i < v->size; i++)
	{
		printf("%d ", v->array[i]);
	}
}

/**
 * TESTS
 */
int vec_has_default_capacity_on_init()
{
	p_vector vec = newVector();

	_assert(vec->capacity == DEFAULT_CAPACITY);
	_assert(size(vec) == 0);

	return 0;
}

int vec_items_can_be_added_to_end()
{
	p_vector v = newVector();
	int i;
	for (i = 0; i < 5; i++)
	{
		add(v, i);
		_assert(v->array[i] == i);
	}

	_assert(v->size == i);

	return 0;
}

int vec_items_can_be_removed_from_the_end()
{
	p_vector v = newVector();

	int i;
	int V_SIZE = 5;
	for (i = 0; i < V_SIZE; i++)
	{
		add(v, i);
		_assert(v->array[i] == i);
	}

	for (i = 0; i < V_SIZE; i++)
	{
		pop(v);
	}

	_assert(v->size == 0);

	return 0;
}

int vec_when_full_doubles_capacity()
{
	p_vector v = newVector();

	for (int i = 0; i < v->capacity + 2; i++)
	{
		add(v, i);
		_assert(v->array[i] == i);
	}

	printf("\n CAP :: %d \n", v->capacity);
	_assert(v->capacity == 2 * DEFAULT_CAPACITY);
	_assert(v->size == DEFAULT_CAPACITY + 1);

	destroyVector(v);
	return 0;
}

int vec_when_capacity_big_halves_it_down()
{
	p_vector v = newVector();

	for (int i = 0; i < 3 * v->capacity + 3; i++)
	{
		add(v, i + 1);
	}

	// printf("%d", v->capacity);
	// remove element to halve capacity
	// pop(v);

	// _assert(v->capacity == DEFAULT_CAPACITY / 2);
	return 0;
}

int vec_items_can_be_deleted_from_end()
{
	p_vector v = newVector();

	add(v, 1);
	add(v, 1);
	int maxSize = v->size;

	pop(v);
	pop(v);
	pop(v);
	pop(v);

	_assert(v->size == maxSize - 2);
	_assert(v->array[0] == 0);

	return 0;
}

int ALL_TESTS()
{
	// _run_tests(vec_has_default_capacity_on_init);
	// _run_tests(vec_items_can_be_added_to_end);
	// _run_tests(vec_items_can_be_removed_from_the_end);
	_run_tests(vec_when_full_doubles_capacity);
	// _run_tests(vec_when_capacity_big_halves_it_down);
	return 0;
}
void SUITE()
{
	if (ALL_TESTS() == 0)
	{
		printf("\n 🎉  ALL TESTS PASSED\n");
		printf(" »   Tests run: %d\n", tests_run);
	}
}

int tests_run = 0;
int main()
{
	SUITE();

	return 0;
}
